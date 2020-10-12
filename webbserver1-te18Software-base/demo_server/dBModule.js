const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webshop', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

 const feedbackSchema = new mongoose.Schema({

       name: String,
       feedback: String,
       rating: Number       

     })

     const Feedback = mongoose.model('input', feedbackSchema);

     exports.storeFeedback = (name, feedback, rating) => {
       var feedback = new Feedback({

        name: String,
        feedback: String,
        rating: Number     

       })

       feedback.save(()=> {

          return "thank you for your feedback"

       })
     }