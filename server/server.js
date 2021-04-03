// server.js
const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => res.status(200)
    .sendFile(path.join(__dirname, '../index.html')));
}

app.listen(port, () => {
  console.log('listening on 3000');
});
