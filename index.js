const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('New Route!')
})

app.get('/lorem/ipsum/akis/mait', (req, res) => {
    res.send({
        data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ea exercitationem unde maiores! Consequatur nobis asperiores impedit perferendis, veniam facere? Obcaecati inventore ipsum consequatur voluptates."
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})