const express = require('express')
const app = express()
const http = require('http')
const port = 3000

const clientDir = __dirname + "\\Client\\"

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => res.sendFile(clientDir + "index.html" ))
app.get('/style', (req, res) => res.sendFile(clientDir + "style2.css" ))
app.get('/bild1', (req, res) => res.sendFile(clientDir + "209891099-288-k515713.jpg" ))

app.post('/', (req, res) => {

    console.log(req.body.name)
    console.log(req.body.email)
    res.redirect('/')
})



app.listen(port, () => console.log(`Example app listening on port port!`))
