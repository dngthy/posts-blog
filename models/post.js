const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  content: String,
  attachments: [{
    attachment_id: String,
    filename: String,
    type: String,
    payload: {
      url: String,
      base64: String
    }
  }]
})

module.exports = mongoose.model('Post', postSchema)
