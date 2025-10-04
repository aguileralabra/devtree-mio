"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express'); // CJS Common JS
var express = require("express"); // ESMSCRIPT
var app = express();
//Routing
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/ecommerce', function (req, res) {
    res.send('Ecommerce');
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
