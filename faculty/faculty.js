'use strict'

/**
 * This model will only be created by users with admin permissions.
 * There must be a fixed sized of this object.
 */

const mongoose = require('mongoose')

const schema = mongoose.Schema({
  description: String // Science, Art, Education
})

const Faculty = mongoose.model('Faculty', schema)

module.exports.create = (description, level, degree) => {

}
