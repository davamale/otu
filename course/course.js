'use strict'

/**
 * This model will be instatiated every semester.
 */

const mongoose = require('mongoose')
const courseCatalog = require('../courseCatalog/courseCatalog')

const schema = mongoose.Schema({
  courseCatalog: Schema.courseCatalog.ObjectId, // relationship with courseCatalog,
  section: {
    type: String, // set limit to three letters
    minLength: 3,
    maxLength: 3
  },
  term: String,
  academicYear: {
    type: Number,
    min: 1950,
    max: 9999
  }
    // TODO add objective
})

const Course = mongoose.model('Course', schema)

module.exports.create = (description, level, degree) => {

}
