// const express = require('express'); // CJS Common JS
import express from 'express'; // ESMSCRIPT

const app = express();

//Routing
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/ecommerce', (req, res) => {
    res.send('Ecommerce');
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




