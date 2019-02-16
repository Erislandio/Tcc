const express = require('express')

const User = require('../models/user')

const router = express.Router()

router.post('/register', async (req, res) => {

    try {

        const user = await User.create(req.body)
        return res.status(200).send({ user })

    } catch (error) {

        return res.status(400).send({ error: "Erro no registro do usuário" })

    }

})


module.exports = app  => app.use('/auth', router)