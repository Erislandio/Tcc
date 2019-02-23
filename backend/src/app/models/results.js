const mongoose = require('../../database/index')
const bcripty = require('bcryptjs')
const relationship = require("mongoose-relationship");


const ResultsSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    resultado: {
        type: String,
        require: true
    },
    imagem: {
        type: String,
        require: true
    },
    data_resultado: {
        type: Date,
        default: Date.now
    },
    condicoes_ambiente: {
        type: String,
        require: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        childPath:"User"
    }
})

ResultsSchema.plugin(relationship, {relationshipPathName: "user"})
const Results = mongoose.model('Results', ResultsSchema)


module.exports = Results