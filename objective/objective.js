'use strict'

const mongoose = require('mongoose')

const schema = mongoose.Schema({
    PLO: String,
    successIndicator: Number,
    successIndicatorPLO: Number,
    target: Number,
    targetPLO: Number,
    items: [{
        plo: String,
        successIndicator: Number,
        successIndicatorPLO: Number,
        target: Number,
        targetPLO: Number
    }]
})

const Objective = mongoose.model('Objective', schema)