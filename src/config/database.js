const mongoose = require('mongoose');

mongoose
  .connect('mongodb://root:test12345@ds121163.mlab.com:21163/student', { useNewUrlParser: true })
  .then(() => {
    console.log('conected to mongo')
  })
  .catch(() => {
    console.error('ERROR IN MONGO')
  })

module.exports = mongoose;