'use strict'

/**
 * This model will only be created by users with admin permissions.
 * There must be a fixed sized of this object.
 */

const mongoose = require('mongoose')

const schema = mongoose.Schema({
    courseId: String,
    level: String,
    degree: String,
    facultySchools: [String],
    courseType: String,
    departments: [String],
    programs: [{
        description: String,
        level: String
    }],
    mayors: [{
        description: String
    }]
})

// class CourseCatalogClass {

// }

const CourseCatalog = mongoose.model('CourseCatalog', schema)

module.exports.create = (description, level, degree) => {

}