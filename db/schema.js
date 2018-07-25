const mongoose = require('./connection')

const FlatSchema = new mongoose.Schema({
  title: String,
  url: String,
  comment: String
})

const Flatsta = mongoose.model('Flatsta', FlatSchema)

module.exports = Flatsta
