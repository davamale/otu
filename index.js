"use strict"
const express = require('express')
const app = express();

const db = require('./db/config')

const user = require('./user/user')

app.get('/', (req, res) => {

    user.create('David', (err, user) => {
        if (user)
            res.send(user.getName())

        res.send(err)
    })

    // res.send('OTU Assessment Under Construction');

})

const server = app.listen(3000, () => {
    console.log(`listening on port ${server.address().port}`);
})