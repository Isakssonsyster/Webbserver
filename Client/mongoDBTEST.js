const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/workshop', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

});

const personSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});
/*
personSchema.methods.speak = (parans) => {

  console.log("Hej");
  const presentation = this.name ? `My name is ${this.name},` : `We are watching you!`;
  //I java hade det varit if(this name!="")
  console.log(presentation);
}
*/ 

const Person = mongoose.model('Person', personSchema);

const Niklas = new Person({ name: 'Niklas', email: 'M@M', age: 33 });

Niklas.save()
