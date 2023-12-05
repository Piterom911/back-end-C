const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/samurais', (req, res) => {
    res.send('Hello, samurais!')
})

app.post('/samurais', (req, res) => {
    res.send('We have created new samurai')
})

app.listen(port, () => {
    console.log(`Exsemple app listening on port ${port}`)
})