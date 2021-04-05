// colorController.js
const Palette = require('../models/paletteModel');

const paletteController = {};

/* 
  TODO:  paletteController.getAll  to return all palettes
*/
paletteController.getAll = (req, res, next) => {
  console.log(`paletteController.getAll invoked`);
  next();
}


/* 
  TODO:  paletteController.getOne  to return one palette specified by _id
*/
paletteController.getOne = (req, res, next) => {
  console.log(`paletteController.getOne invoked`);
  next();
}

/* 
  TODO:  paletteController.create  to create a new palette
*/
paletteController.create = (req, res, next) => {
  console.log(`paletteController.create invoked`);
  console.log(req.body);
  // const newPalette = JSON.parse(req.body.palette);
  console.log('newPalette', req.body);
  const palette = new Palette(req.body);
  console.log('palette', palette);
  palette.save()
    .then(data => {
      console.log(`data = ${data}`);
      res.locals = data;
      next();
    })
    .catch(err => {
      console.log(`err = ${err}`);
      next({err: err});
    });
}


module.exports = paletteController;