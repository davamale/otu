const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        data: {
            finished: true
        }
    });
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});