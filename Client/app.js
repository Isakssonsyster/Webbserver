const express = require('express')
const app = express()
const port = 3000

const clientDir = __dirname + "\\Client\\"

app.get('/', (req, res) => res.sendFile(clientDir + "index.html" ))
app.get('/style', (req, res) => res.sendFile(clientDir + "style2.css" ))
app.get('/bild1', (req, res) => res.sendFile(clientDir + "209891099-288-k515713.jpg" ))


app.listen(port, () => console.log(`Example app listening on port port!`))
