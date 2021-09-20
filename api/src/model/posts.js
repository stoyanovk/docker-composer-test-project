const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
  title: String,
  desc: String
})

module.exports = mongoose.model('Posts', postsSchema)
