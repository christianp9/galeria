const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('conected to mongo')
  })
  .catch(() => {
    console.error('ERROR IN MONGO')
  })

module.exports = mongoose;