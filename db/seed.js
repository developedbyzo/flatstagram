const Flatsta = require('./schema')
const seedData = require('./flatstagramData')

Flatsta.remove({})
  .then(() => {
    return Flatsta.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })
