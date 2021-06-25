const Palette = require('../models/paletteModel');

const paletteController = {};

/**
 * GET all saved palettes
 * @returns all palettes/error
 */
paletteController.getAll = (req, res, next) => {
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

/**
 * GET palette by _id
 * @returns palettte._id/error
 */
paletteController.getOne = (req, res, next) => {
  /*
  const filter = {_id: {}};
  Palette.find(filter, function (err, data){
    if(err){
      next({err: err});
    } else{
      res.locals = data;
      next()
    }
  })*/
  next()
}

/**
 * POST new palette to database
 * @returns success/error
 */
paletteController.create = (req, res, next) => {
  
  const palette = new Palette(req.body);
  palette.save()
    .then(data => {
      res.locals = data;
      next();
    })
    .catch(err => {
      console.log(`err = ${err}`);
      next({err: err});
    });
}

module.exports = paletteController;