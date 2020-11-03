const mongoose = require('mongoose');
const express = require('express')
const mongoDBTEST = require('./mongoDBTEST')
const dBModule = require('./dBModule')
const messageModule = require('./messageModule')
const app = express()
const http = require('http')
const port = 3000

const clientDir = __dirname + "\\Client\\"

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(clientDir))

app.get('/', (req, res) => {
  res.render(clientDir + "index.ejs")
});

app.get('/feedbackForum', async(req, res) => {
  var messages = await messageModule.getMessages()
  res.render(clientDir + "feedbackForum.ejs", {message: messages})
});

app.post('/', (req, res) => {

  var Person = mongoDBTEST.createFeedback(req.body.name, req.body.feedback);
  dBModule.saveInput(Person)

    res.redirect('/') 
})

app.post('/feedbackForum', async(req, res) => {
  var message = messageModule.createMessage(req.body.name, req.body.text)
  dBModule.saveInput(message)

  var messages = await messageModule.getMessages()
  res.render(clientDir + "feedbackForum.ejs", {message: messages})
});


app.listen(port, () => console.log(`Example app listening on port port ${port}!`))
