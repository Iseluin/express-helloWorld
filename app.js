const express = require('express')
const app = express();
const port = 3000

app.get('/', (req,res) => {
    res.send('Hello Worlddddd')
})

app.post('/', (req,res) => {
    res.send('I got a Post request')
})

app.put('/user', (req, res) => {
    res.send('I got a Put request on the /user route')
})

app.delete('/user', (req, res) => {
    res.send('I got a Delete request at /user route')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})