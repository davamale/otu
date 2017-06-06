'use strict'

/**
 * This model will only be created by users with admin permissions.
 * There must be a fixed sized of this object.
 */

const mongoose = require('mongoose')

const schema = mongoose.Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    }
})

class ProfessorClass {
    getName() {
        return `${this.firstName} ${this.lastName}`
    }
}

schema.loadClass(ProfessorClass)

const Professor = mongoose.model('Professor', schema)

module.exports.create = (firstName, lastName) => {

}