const express = require("express")
const router = express.Router()
const key = process.env.API_KEY
const URL = `https://api.rawg.io/api/games?key=${key}`
const axios = require('axios')
const { Videogame, Genre } = require('../db')
const { Op } = require("sequelize")

router.get('/', async (req, res) => {

    const { name } = req.query

    if (name) {


        let searchResults = await axios.get(`${URL}&search=${name}&page_size=15`)
        searchResults = searchResults.data.results.map(e => ({ id: e.id, name: e.name, image: e.background_image ? e.background_image.replace("/media/", "/media/crop/600/400/") : "https://via.placeholder.com/150", genres: e.genres.map(e => e.name), rating: e.rating }))

        let dbResults = await Videogame.findAll({
            attributes: ["id", "name", "image", "rating"],
            include: [{ model: Genre, attributes: ["name"], through: { attributes: [] } }],
            where: {
                name: {
                    [Op.iLike]: "%" + decodeURIComponent(name) + "%"
                }
            }
        })

        searchResults = dbResults.map(e => ({ id: e.id + "A", name: e.name, image: e.image || "https://via.placeholder.com/150", genres: e.genres.map(e => e.name), rating: e.rating })).concat(searchResults)

        if (!searchResults.length) return res.send({ msg: "Your search - " + decodeURIComponent(name) + " - did not match any documents." })

        return res.send(searchResults)

    }

    const dbGames = await Videogame.findAll({
        attributes: ["id", "name", "image", "rating"],
        include: [{ model: Genre, attributes: ["name"], through: { attributes: [] } }]
    })


    //One of this project restrictions is that I have to manage pagination from my backend, not being allowed to use query parameters such as "page". To simulate that behaviour, I've put 100 games inside "games" variable
    let games = await Promise.all([axios.get(`${URL}&page_size=25`), axios.get(`${URL}&page_size=25&page=2`), axios.get(`${URL}&page_size=25&page=3`), axios.get(`${URL}&page_size=25&page=4`)])
        .then(values => values.flatMap(e => e.data.results)
            .map(e => ({ id: e.id, name: e.name, image: e.background_image ? e.background_image.replace("/media/", "/media/crop/600/400/") : "https://via.placeholder.com/150", genres: e.genres.map(e => e.name), rating: e.rating }))
        )

    games = dbGames.map(e => ({ id: e.id + "A", name: e.name, image: e.image || "https://via.placeholder.com/150", genres: e.genres.map(e => e.name), rating: e.rating })).concat(games)


    res.send(games)

})


module.exports = router