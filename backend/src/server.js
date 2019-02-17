const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const app = express()


// * entender os dados enviados em json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./app/controllers/authController')(app)
require('./app/controllers/projectController')(app)

app.listen(port, () => {
    console.log(`Servidor online na porta ${port}`)
})