const express = require('express')
const authMiddleware = require('../middleware/auth')
const router = express.Router()

const Results = require('../models/results')
const Camera = require('../models/camera')
const User = require('../models/user')

router.use(authMiddleware)

router.get('/', async (req, res) => {
  

        
})

router.get('/:resultId', async (req, res) => {

  
})

router.post('/', async (req, res) => {

  
})

router.put('/:resultId', async (req, res) => {

})

router.delete('/:resultId', async (req, res) => {

  

})


module.exports = app => app.use('/results', router)
