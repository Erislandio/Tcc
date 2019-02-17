const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.post('/register', async (req, res) => {

    const { email } = req.body

    try {

        // * caso o usuário já possua um cadastro
        if (await User.findOne({ email }))
            return res.status(400).send({ Erro: 'Usuário já possui uma conta' })

        const user = await User.create(req.body)


        // * não retorna a senha do usuário
        user.password = undefined


        return res.status(200).send({ user })

    } catch (error) {

        return res.status(400).send({ error: "Erro no registro do usuário" })

    }

})


module.exports = app => app.use('/auth', router)