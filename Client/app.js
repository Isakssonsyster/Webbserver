const mongoose = require('mongoose');
const express = require('express')
const app = express()
const http = require('http')
const port = 3000

const clientDir = __dirname + "\\"//Client\\"

mongoose.connect('mongodb://localhost/workshop', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

});

const personSchema = new mongoose.Schema({
  name: String,
  email: String
});


const Person = mongoose.model('person' , personSchema);

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => res.sendFile(clientDir + "index.html" ))
app.get('/style', (req, res) => res.sendFile(clientDir + "style2.css" ))
app.get('/bild1', (req, res) => res.sendFile(clientDir + "209891099-288-k515713.jpg" ))

app.post('/', (req, res) => {

  console.log(req.body.name)
  console.log(req.body.email)

  const Dora = new Person({name: req.body.name, email: req.body.email});

  Dora.save(() => {

    console.log("Hej")

  })
    /*
    console.log(req.body.name)
    console.log(req.body.email)
    */


    res.redirect('/') 
})



app.listen(port, () => console.log(`Example app listening on port port ${port}!`))
