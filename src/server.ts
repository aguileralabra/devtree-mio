// const express = require('express'); // CJS Common JS
import * as express from 'express' // ESMSCRIPT
import router from './router';
import { connectDB } from './db';

connectDB();

const app = express();

//Leer datos de formularios
app.use(express.json());

//Use permite mapear todas las rutas de router tanto get, post, put, delete
app.use('/api/v1/', router);

export default app;
