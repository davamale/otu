'use strict'
const mongoose = require('mongoose')

const schema = mongoose.Schema({

})

class ResultsClass {

}

schema.loadClass(ResultsClass)

const Results = mongoose.model('ResultsClass', schema)

// module.exports.getAll