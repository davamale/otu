var mongoose = require('mongoose');

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

var User = mongoose.model('User', schema)

module.exports.create = (name, cb) => {

    const user = new User({
        name: name
    })
    user.save(cb);
}