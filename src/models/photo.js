const { model, Schema } = require('mongoose');


const photo = new Schema({
    name: String,
    description: String,
    imageURL: String,
    public_id: String
})

module.exports = model('photo', photo);