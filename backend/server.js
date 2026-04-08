//Express Server

import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// this tells our server to listen to the port 3000
app.listen(3000, () => { console.log('Server started at port 3000')} );