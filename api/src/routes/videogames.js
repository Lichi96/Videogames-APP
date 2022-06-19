const express = require('express');
require('dotenv').config();
const { API_KEY } = process.env;
const axios = require("axios");
const router = express.Router();
const { Videogame, Genre } = require("../db.js");

const url = `https://api.rawg.io/api/games?key=${API_KEY}`;

const getApiVideogames = async () => {
    let pageNum = 1;
    let apiData = [];
    let videogames;

    while (pageNum <= 5) {
        const apiInfo = await axios.get(`${url}&page=${pageNum}`);
        apiData.push(apiInfo.data.results);
        pageNum++;
    }

    videogames = apiData.flat();
    
    return videogames.map(videogame => {
        const { id, name, released, background_image , rating, platforms, genres } = videogame;
        return {
            id,
            name,
            released,
            background_image,
            rating,
            platforms: platforms.map(p => p.platform.name),
            genres: genres.map(g => {
                return {
                    id: g.id,
                    name: g.name
                }
            })  
        }
    });
}

const getDBVideogames = async () => {
    const videogames =  await Videogame.findAll({
        include: [{
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }]
    });
    return videogames.map(videogame => videogame.dataValues);
}


router.get("/", async (req, res) => {
    const { name, genre } = req.query;
    const apiData = await getApiVideogames();
    const dbData = await getDBVideogames();

    let totalData = apiData.concat(dbData);

    if (name) {
        const videogamesByName = totalData.filter(videogame => videogame.name.toLowerCase().includes(name.toLowerCase()));
        return res.json(videogamesByName.slice(0, 15));
    }

    // if (genre) {
    //     const videogamesByGenre = totalData.filter(videogame => videogame.genre.toLowerCase().includes(genre.toLowerCase()));
    //     return res.json(videogamesByGenre);
    // }

    res.json(apiData);
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    const apiData = await getApiVideogames();

    const apiVideogamesById = apiData.filter(videogame => videogame.id === parseInt(id));

    res.json(apiVideogamesById)
});

router.post("/", async (req, res) => {
    const { name, description, released, rating, platforms, genres } = req.body;

    try {
        if (!name || !description || !platforms || !genres) return res.status(404).send("Faltan datos obligatorios");

        const newVideogame = await Videogame.create({name, description, released, rating, platforms});
        newVideogame.addGenres(genres);
        res.json(newVideogame);
    } 
    catch (error) {
        res.status(404).json({error: error.message});
    }
});

module.exports = router;