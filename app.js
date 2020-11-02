const mongoose = require('mongoose');
const express = require('express')
const mongoDBTEST = require('./mongoDBTEST')
const dBModule = require('./dBModule')
const app = express()
const http = require('http')
const port = 3000

const clientDir = __dirname + "\\Client\\"

mongoose.connect('mongodb://localhost/workshop', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

});

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => res.sendFile(clientDir + "index.html" ))
app.get('/style', (req, res) => res.sendFile(clientDir + "style2.css" ))
app.get('/bild1', (req, res) => res.sendFile(clientDir + "209891099-288-k515713.jpg" ))

app.post('/', (req, res) => {

  console.log(req.body.name)
  console.log(req.body.email)

  var Person = mongoDBTEST.createFeedback(req.body.name, req.body.feedback);
  dBModule.saveInput(Person)

    res.redirect('/') 
})




app.listen(port, () => console.log(`Example app listening on port port ${port}!`))
