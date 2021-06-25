const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api');

const app = express();

const port = process.env.PORT || 3000;

/** 
 * Production build page serve 
 */
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => res.status(200)
    .sendFile(path.join(__dirname, '../index.html')));
}

/**
 * Parsing and encoding
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** 
 * express.Router() module
 */
app.use('/api', apiRouter);

/** 
 * 404 handler
 */
app.use((req, res) => res.status(404).send(`404 - We could not find that resource.`));

/** 
 * Global Error Handler
 */
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

/**
 * Establish server connection
 */
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
