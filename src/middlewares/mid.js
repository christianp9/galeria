module.exports = (app) =>{
    const morgan = require('morgan');
    const multer = require('multer');
    const path = require('path');
    const express = require('express');

    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

   const storage = multer.diskStorage({
        destination: path.join(__dirname, '../public/uploads'),
        filename: (req,file,cb)=>{
            cb(null, new Date().getTime() + path.extname(file.originalname));
        }
    });
    app.use(multer({storage}).single('image'));
};