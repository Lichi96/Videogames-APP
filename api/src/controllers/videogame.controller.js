const { getAllVideogames, getOneApiVideogame } = require("../utils");
const { Videogame, Genre } = require("../db.js");

const findAllVideogames = async (req, res) => {
    const { name } = req.query;
    
    let videogames = await getAllVideogames();

    if (name) {
        const videogamesByName = videogames.filter(videogame => videogame.name.toLowerCase().includes(name.toLowerCase()));
        return res.json(videogamesByName.slice(0, 15));
    }
    const orderedVideogames = videogames.sort((a, b) => a.name.localeCompare(b.name))
    res.json(orderedVideogames);
}

const findVideogame = async (req, res) => {
    const { id } = req.params;
    
    try {
        let videogame;
        if (!id.includes("-")) videogame = await getOneApiVideogame(id);
        else videogame = await Videogame.findByPk(id, {
            include: [{
                model: Genre,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }]
        });
        
        videogame ? res.json(videogame) : res.json({error: "Videogame not found"})
    }
    catch (error) {
        res.status(404).send({error: "Videogame not found"});
    }


}

const createVideogame = async (req, res) => {
    const { name, description, released, rating, platforms, genres, image } = req.body;

    try {
        if (!name || !description || !platforms || !genres) return res.status(404).send("Faltan datos obligatorios");

        const newVideogame = await Videogame.create({name, description, released, rating, platforms, image});
        newVideogame.addGenres(genres);
        res.json(newVideogame);
    } 
    catch (error) {
        res.status(404).json({error: error.message});
    }
}

const deleteVideogame = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedVideogame = await Videogame.destroy({
            where: {
                id
            }
        })
        if (deletedVideogame) res.send("Videojuego eliminado correctamente")
    }
    catch (error) {
        res.status(404).json({error: error.message})
    } 
}

module.exports = {
    findAllVideogames,
    findVideogame,
    createVideogame,
    deleteVideogame
}