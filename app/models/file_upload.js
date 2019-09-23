const mongoose = require('mongoose')
// TO DO: add ownership
const fileUploadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})
const FileUpload = mongoose.model('FileUpload', fileUploadSchema)
module.exports = FileUpload
