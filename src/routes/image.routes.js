module.exports = (app) =>{
    const photo = require('../models/photo')
    const cloudinary = require('cloudinary');
    const fs = require('fs-extra');
    const Photos = require('../controller/controller_routes')
    
    cloudinary.config({
        cloud_name:'divl37evs',
        api_key:'454498726193375',
        api_secret:'n0bOmHU59hbYSXYhOkb9FPcTUDI'
    })
    app.get('/', Photos.principalView);
    app.get('/images/add', Photos.addImages);
    app.post('/images/add', Photos.postImages); 
    app.get('/images/delete/:photo_id', Photos.deletePhotos);
}