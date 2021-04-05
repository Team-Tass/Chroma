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
app.use((req, res) => res.status(404).send(`404 - We could not find that resource.`));

/* Global Error Handler */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log('listening on 3000');
});
