const express = require('express');
const findOrCreateGenres = require('../controllers/genre.controller');

const router = express.Router();


router.get("/", findOrCreateGenres);

module.exports = router;