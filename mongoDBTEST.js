const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({

  name: String,
  feedback: String,      

})

const Feedback = mongoose.model('Feedback', feedbackSchema);

exports.createFeedback = (name, feedback) => {
    var feedback = new Feedback({
      name: name,
      feedback: feedback
    })

    return feedback
}