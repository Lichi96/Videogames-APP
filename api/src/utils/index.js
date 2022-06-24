const axios = require("axios");
require('dotenv').config();
const { API_KEY } = process.env;
const { Videogame, Genre } = require("../db.js");

const urlVideogame = `https://api.rawg.io/api/games?key=${API_KEY}`;
const urlGenre = `https://api.rawg.io/api/genres?key=${API_KEY}`;

const getApiVideogames = async () => {
    let pageNum = 1;
    let apiData = [];
    let videogames;

    while (pageNum <= 5) {
        const apiInfo = await axios.get(`${urlVideogame}&page=${pageNum}`);
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
            image: background_image,
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

const getOneApiVideogame = async (videogameId) => {
    const videogame = await axios.get(`https://api.rawg.io/api/games/${videogameId}?key=${API_KEY}`); 
    const { id, name, description_raw, released, background_image , rating, platforms, genres } = videogame.data;
    return {
        id,
        name,
        description: description_raw,
        released,
        image: background_image,
        rating,
        platforms: platforms.map(p => p.platform.name),
        genres: genres.map(g => {
            return {
                id: g.id,
                name: g.name
            }
        })  
    }
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

const getAllVideogames = async () => {
    const apiData = await getApiVideogames();
    const dbData = await getDBVideogames();
    const videogames = apiData.concat(dbData);
    return videogames;
}

const getApiGenres = async () => {
    const apiData = await axios.get(urlGenre);
    const apiGenres = apiData.data.results.map(genre => {
        return {
            id: genre.id,
            name: genre.name,
        }
    });

    return apiGenres;
}

module.exports = {
    getApiVideogames,
    getOneApiVideogame,
    getDBVideogames,
    getAllVideogames,
    getApiGenres
}