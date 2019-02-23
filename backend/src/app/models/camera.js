const mongoose = require('../../database/index')
const bcripty = require('bcryptjs')

const CameraSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    tipo: {
        type: String,
    },
    qualidade: {
        type: String
    },
})

const Results = mongoose.model('Camera', CameraSchema)
module.exports = Results