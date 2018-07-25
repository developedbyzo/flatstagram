const mongoose = require('./connection')

const FlatSchema = new mongoose.Schema({
  comment: String
})

const Flatsta = mongoose.model('Flatsta', FlatSchema)

module.exports = Flatsta
