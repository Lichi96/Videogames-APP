const express = require('express');
const router = express.Router();
const { findAllVideogames, findVideogame, createVideogame, updateVideogame, deleteVideogame } = require('../controllers/videogame.controller.js');


router.get("/", findAllVideogames);

router.get("/:id", findVideogame);

router.post("/", createVideogame);

router.put("/:id", updateVideogame);

router.delete("/:id", deleteVideogame);

router.get("/favicon.ico", (req, res) => res.status(204));

module.exports = router;