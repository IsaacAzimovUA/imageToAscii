const express = require('express');
const router = express.Router();

const {
  convertToImage,
  getOptions,
} = require('../controllers/imageController');

router.route('/').get(getOptions);
router.route('/convert').post(convertToImage);

module.exports = router;
