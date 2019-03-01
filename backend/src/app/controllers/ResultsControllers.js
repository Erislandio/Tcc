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

        const { 
            camera_name,
            tipo, qualidade,
            resultado,
            condicoes_ambiente
        } = req.body

        const u = await User.findById(req.userId)

        const user = await User.findByIdAndUpdate(req.userId, {
            $push: {
                results: await Results.create({ ...req.body, u })
            }
        })

        const resultados = await Results.find({ _id: { $in: user.results } })

        user.results = undefined
        return res.status(200).send({ user, resultados })

    } catch (err) {
        console.log(err)
        return res.status(400).send({ err, erro: "Não foi possível criar o resultado" })
    }

})


router.get('/result', async (req, res) => {

    try {

        const user = await User.findById(req.userId)
        const resultados = await Results.find({ _id: { $in: user.results } })

        return res.status(200).send({ resultados })

    } catch (error) {
        return res.status(400).send({ error, erro: "Não foi possivel consultar o resultado" })
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
