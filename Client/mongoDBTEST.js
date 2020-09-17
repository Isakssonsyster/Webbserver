const mongoose = require('mongoose');
const db = mangoose.connection;

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

}); 

const kittySchema = new mongoose.Schema({

    name: String

});

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name);

kittySchema.methods.speak = function () {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  }
  
  const Kitten = mongoose.model('Kitten', kittySchema);

  const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak();


Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })

  Kitten.find({ name: /^fluff/ }, callback);