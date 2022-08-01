const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost:27017/', { useNewUrlParser: true })
  .catch((e) => {
    console.log('connection error', e.message)
  })

const db = mongoose.connection

module.exports = db