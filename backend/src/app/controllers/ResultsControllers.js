const express = require('express')
const authMiddleware = require('../middleware/auth')
const router = express.Router()


const Results = require('../models/results')
const Camera = require('../models/camera')
const User = require('../models/user')

router.use(authMiddleware)

router.get('/list', async (req, res) => {

    try {
        const user = await User.findById(req.userId)

        return res.status(400).send(user.results)

    } catch (error) {
        return res.status(400).send({ erro: "Não foi possível listar o resultado" })
    }

})

router.post('/create', async (req, res) => {

    try {

        const user = await User.findById(req.userId)

        const { Camera_name, tipo, qualidade, id, resultado, imagem, condicoes_ambiente } = req.body

        const results = await Results.create({ id, resultado, imagem, condicoes_ambiente, user })

        const camera = await Camera.create({ Camera_name, tipo, qualidade, user })


        return res.status(200).send({ results, camera })

    } catch (err) {
        console.log(err)
        return res.status(400).send({ err, erro: "Não foi possível criar o resultado" })
    }

})

// ! get current user
router.get('/current', async (req, res) => {

    try {

        const user = await User.findById(req.userId)

        return res.status(200).send({ user })

    } catch (error) {

        return res.status(400).send({ erro, erro: "Não foi possivel consultar o usuário." })
    }

})


module.exports = app => app.use('/results', router)
