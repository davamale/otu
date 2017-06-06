'use strict'
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
})

class UserClass {
    getName() {
        return this.name
    }
}

schema.loadClass(UserClass)

const User = mongoose.model('User', schema)

module.exports.create = (name) => {

    const user = new User({
        name: name
    })

    return user.save()
}