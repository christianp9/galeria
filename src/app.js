const express = require('express');
const app = require('express')();
const path = require('path');
const exhbs = require('express-handlebars');
const port = 3000;

//mongo
require('./config/database');

//settings
app.set('port',process.env.PORT ||  port);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exhbs({
    defaultLayout: 'mailn',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs');

// //middlewares
require('./middlewares/mid')(app);

// //routes
require('./routes/image.routes')(app);

// init server

module.exports = (app);