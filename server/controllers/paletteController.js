// colorController.js
const Palette = require('../models/paletteModel');

const paletteController = {};

/* 
  TODO:  paletteController.getAll  to return all palettes
*/
paletteController.getAll = (req, res, next) => {
  console.log(`paletteController.getAll invoked`);
  const filter = {};
  Palette.find(filter, function (err, data){
    if(err){
      next({err: err});
    } else{
      res.locals = data;
      next()
    }
  })
}


/* 
  TODO:  paletteController.getOne  to return one palette specified by _id
*/

paletteController.getOne = (req, res, next) => {
  console.log(`paletteController.getOne invoked`);
  /*
  const filter = {_id: {}};
  Palette.find(filter, function (err, data){
    console.log(data);
    if(err){
      next({err: err});
    } else{
      res.locals = data;
      next()
    }
  })
  */
  next();
}

/* 
  TODO:  paletteController.create  to create a new palette
*/
paletteController.create = (req, res, next) => {
  console.log(`paletteController.create invoked`);
  console.log(req.body);
  const newPalette = JSON.parse(req.body.palette);
  console.log(typeof newPalette);
  const palette = new Palette({ palette: newPalette});
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