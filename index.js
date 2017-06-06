'use strict'
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const db = require('./db/config')

const user = require('./user/user')

// middleware
app.use(bodyParser.json())

// Error middleware
app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.get('/', (req, res) => {
    res.status(200).send("Add your name like at the of the url like this URL/'your name'; to add it to the db.")
})

app.get('/:name', (req, res) => {
    console.log(req.params.name)
    user.create(req.params.name)
        .then(user => {
            res.send(user.getName())
        })
        .catch(err => {
            res.send(`${req.params.name} already registered. Error: ${err}`)
        })

    // user.create(req.params.name, (err, user) => {
    //     if (user)
    //         return res.send(user.getName())

    //     res.send(`${req.params.name} already registered`)
    // })

    // res.send('OTU Assessment Under Construction');

})

const server = app.listen(3000, () => {
    console.log(`listening on port ${server.address().port}`)
})