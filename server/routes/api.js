const express = require('express');
const paletteController = require('../controllers/paletteController');
const router = express.Router();

/**  
 * GET /api/palette/all
 * @returns status, response
 */ 
router.get('/palette/all',
  paletteController.getAll,
  (req, res) => res.status(200).json(res.locals)
);

/**  
 * GET /api/palette/<id>
 * @returns status, response
 */
router.get('/palette/:id',
  paletteController.getOne,
  (req, res) => res.status(200).json(res.locals)
);

/** 
 * POST /api/palette
 * @returns status, response
 */  
router.post('/palette',
  paletteController.create,
  (req, res) => res.status(200).json(res.locals)
);


module.exports = router;