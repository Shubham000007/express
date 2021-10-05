const express = require("express");
const path = require('path');
var favicon = require('serve-favicon');

const app = express();
const port = 3000;

//Middleware

//Favicon
app.use(favicon(path.join(__dirname, '../public/favicon.jpg')));


// Home Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/home.html'));
});


// Contact Page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/contact.html'));
    // res.json({
    //     'messgae':"ok",
    //     "status":"ok"
    // })
});

// About Page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/about.html'));
});



// About Page
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/services.html'));
});


// Listen to port
app.listen(port, () => {
    console.log(`Website is working in http://localhost:${port}`);
});