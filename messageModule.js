const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({

  name: String,
  text: String,      

})

const Message = mongoose.model('Message', messageSchema);

exports.createMessage = (name, text) => {
    var message = new Message({
      name: name,
      text: text
    })

    return message
}

exports.getMessages = async() => {
    var message = await Message.find({});

    return message
}