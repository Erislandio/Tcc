const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth')

const router = express.Router()

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    })
}

router.post('/register', async (req, res) => {

    const { email } = req.body

    try {

        // * caso o usuário já possua um cadastro
        if (await User.findOne({ email }))
            return res.status(400).send({ Erro: 'Usuário já possui uma conta' })

        const user = await User.create(req.body)


        // * não retorna a senha do usuário
        user.password = undefined


        return res.status(200).send({
            user,
            token: generateToken({ id: user.id })

        })

    } catch (error) {

        return res.status(400).send({ error: "Erro no registro do usuário" })

    }

})


router.post('/authenticate', async (req, res) => {


    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')

    if (!user)
        return res.status(400).send({ Erro: "Usuário não encontrado / email errado" })


    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ Erro: "Senha incorreta" })

    user.password = undefined

    res.status(200).send({
        user,
        token: generateToken({ id: user.id })
    })

})


module.exports = app => app.use('/auth', router)