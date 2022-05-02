const { default: axios } = require('axios')
const express = require('express')
const router = express.Router()
const key = process.env.API_KEY
const URL = `https://api.rawg.io/api/games/`
const { Videogame, Genre } = require("../db")

router.get('/:id', async (req, res) => {

    let { id } = req.params
    let game

    if (/[Aa]$/.test(id)) {
        id = parseInt(/\d+/.exec(id))

        try {
            game = await Videogame.findByPk(id, {
                include: [{ model: Genre, attributes: ["name"], through: { attributes: [] } }]
            }).then(res => res.toJSON())

        } catch (e) {
            return res.status(404).send({ msg: "Game not found" })
        }


        game = {
            ...game,
            image: game.image || "https://via.placeholder.com/150",
            id: game.id + "A",
            platforms: await Promise.all(
                game.platforms.map(e =>
                    axios.get(`https://api.rawg.io/api/platforms/${e}?key=${key}`)
                        .then(res => res.data.name)
                        .catch(e => { })
                )),
            genres: game.genres.map(e => e.name)
        }


        return res.send(game)
    }

    try {
        game = await axios.get(`${URL}${id}?key=${key}`).then(res => res.data)
    } catch {
        return res.status(404).send({ msg: "Game not found" })
    }

    game = {
        id: game.id,
        name: game.name,
        description: game.description,
        launchDate: game.released,
        rating: game.rating,
        image: game.background_image || "https://via.placeholder.com/150",
        platforms: game.platforms.map(e => e.platform.name),
        genres: game.genres.map(e => e.name)
    }

    res.send(game)
})

router.post("/", async (req, res) => {

    const { name, description, launchDate, rating, image, platforms, genres } = req.body


    const game = await Videogame.create({
        name,
        description,
        launchDate,
        rating,
        image,
        platforms: platforms
    })

    await game.addGenres(genres)

    res.send({ msg: "Game added successfully" })

})


module.exports = router