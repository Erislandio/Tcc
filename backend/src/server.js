const port = 4000

const express = require('express')
const server = express()
const bodyParser = require('body-parser')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(process.env.PORT || port, () => {
    console.log(`Sever esta online`)
})

module.exports = server

