const mongoose = require('mongoose')

const connect = url => {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

  return mongoose.connection
}

module.exports.connect = connect
