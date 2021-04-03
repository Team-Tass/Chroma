// routes/api.js
const express = require('express');
const paletteController = require('../controllers/paletteController');
const router = express.Router();

// @desc    get all palettes
// @url     GET /api/palette/all
router.get('/palette/all',
  paletteController.getAll,
  (req, res) => res.status(200).json(res.locals)
);

// @desc    get a palette by id
// @url     GET /api/palette/<id>
router.get('/palette/:id',
  paletteController.getOne,
  (req, res) => res.status(200).json(res.locals)
);

// @desc    add a new palette
// @url     POST /api/palette
router.post('/palette',
  paletteController.create,
  (req, res) => res.status(200).json(res.locals)
);


module.exports = router;