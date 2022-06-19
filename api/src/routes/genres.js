const express = require('express');
require('dotenv').config();
const { API_KEY } = process.env;
const axios = require("axios");
const router = express.Router();
const { Genre } = require("../db.js");

const url = `https://api.rawg.io/api/genres?key=${API_KEY}`;

const getApiGenres = async () => {
    const apiData = await axios.get(url);
    const apiGenres = apiData.data.results.map(genre => {
        return {
            id: genre.id,
            name: genre.name,
            // games: genre.games.map(g => {
            //     return {
            //         id: g.id,
            //         name: g.name
            //     }
            // })
        }
    });

    return apiGenres;
}

router.get("/", async (req, res) => {
    const genres = await getApiGenres();
    genres.map(async (g) => {
        await Genre.findOrCreate({ where: { id: g.id, name: g.name}});
    });

    res.json(genres);
});

module.exports = router;