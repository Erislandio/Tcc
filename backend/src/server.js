const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const app = express()


// * entender os dados enviados em json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('ok')
})

app.listen(port, () => {
    console.log(`Servidor online na porta ${port}`)
})