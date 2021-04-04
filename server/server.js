// server.js
const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api');

const app = express();

const port = process.env.PORT || 3000;

/* Production build page serve */
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => res.status(200)
    .sendFile(path.join(__dirname, '../index.html')));
}

/* Parsing and Encoding */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */
app.use('/api', apiRouter);

/* 404 Handler */


/* Global Error Handler */


app.listen(port, () => {
  console.log('listening on 3000');
});
