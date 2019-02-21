'use strict'
const photo = require('../models/photo');
const Photos={};

Photos.principalView = async (req,res) =>{
    const photos = await photo.find();
    res.render('image',{photos})
    console.log(photos);
}

Photos.addImages = async (req,res) => {
    const photos = await photo.find();
    res.render('image_form',{photos});
}

Photos.postImages = async (req,res) =>{
    console.log(req.body);
    const{name, description} = req.body;
    console.log(req.file)
    const result = await cloudinary.v2.uploader.upload(req.file.path)
    const newphoto = new photo({
        name,
        description,
        imageURL: result.url,
        public_id: result.public_id
    });
    await newphoto.save();
    await fs.unlink(req.file.path)
    res.redirect('/')
}

Photos.deletePhotos = async(req,res) =>{
    const {photo_id} = req.params;
    const photod = await photo.findByIdAndDelete(photo_id);
    const result = await cloudinary.v2.uploader.destroy(photod.public_id);
    console.log(result);  
    res.redirect('/images/add')
}


module.exports = Photos; 