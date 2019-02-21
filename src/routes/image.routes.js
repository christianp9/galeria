module.exports = (app) =>{
    const photo = require('../models/photo')
    const cloudinary = require('cloudinary');
    const fs = require('fs-extra');
    const Photos = require('../controller/controller_routes')

    cloudinary.config({
        cloud_name:process.env.CLOUD_NAME,
        api_key:process.env.API_KEY,
        api_secret:process.env.API_SECRET
    })
    app.get('/', Photos.principalView);
    app.get('/images/add', Photos.addImages);
    app.post('/images/add', Photos.postImages); 
    app.get('/images/delete/:photo_id', Photos.deletePhotos);
}