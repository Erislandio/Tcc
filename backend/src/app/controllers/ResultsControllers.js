const express = require('express')
const authMiddleware = require('../middleware/auth')
const router = express.Router()


const Results = require('../models/results')
const Camera = require('../models/camera')
const User = require('../models/user')

router.use(authMiddleware)

router.get('/', async (req, res) => {



})

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

        await User.findOneAndUpdate(user, {
            results: req.body
        })


        const results = await Results.create({ ...req.body, user })

        return res.status(200).send({ results })

    } catch (err) {
        console.log(err)
        return res.status(400).send({ err, erro: "Não foi possível criar o resultado" })
    }

})

router.put('/:resultId', async (req, res) => {

})

router.delete('/:resultId', async (req, res) => {



})


module.exports = app => app.use('/results', router)
