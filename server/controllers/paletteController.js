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
  next();
}


module.exports = paletteController;