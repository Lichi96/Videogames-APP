const { Genre } = require("../db.js");
const { getApiGenres } = require("../utils");

const findOrCreateGenres = async (req, res) => {
    const genres = await getApiGenres();
    genres.map(async (g) => {
        await Genre.findOrCreate({ where: { id: g.id, name: g.name}});
    });

    res.json(genres);
}

module.exports = findOrCreateGenres