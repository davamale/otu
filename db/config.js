"use strict"

const mongoose = require('mongoose');
// const config = require('config');
// const dbConfig = config.get('DBConfig');

//TODO: Move to config file
const uri = 'mongodb://127.0.0.1:27017/otu'

const options = {
    promiseLibrary: require('bluebird')
}

mongoose.connect(uri, options).then(
    () => {
        console.log('Succeeded connected to: ' + mongoose.options);
    }, (err) => {
        console.log('ERROR connecting to host: ' + err);
    }
)

module.exports = mongoose