'use strict'
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const db = require('./db/config')

const user = require('./user/user')

// middleware
app.use(bodyParser.json())

app.get('/:name', (req, res) => {
    console.log(req.params.name)
    user.create(req.params.name, (err, user) => {
        if (user)
            return res.send(user.getName())

        res.send(`${req.params.name} already registered`)
    })

    // res.send('OTU Assessment Under Construction');

})

const server = app.listen(3000, () => {
    console.log(`listening on port ${server.address().port}`);
})