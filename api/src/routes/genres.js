const express = require('express')
const router = express.Router()
const { Genre } = require("../db")

router.get('/', async (req, res) => {

    const genres = await Genre.findAll()

    res.send(genres)
})

module.exports = router