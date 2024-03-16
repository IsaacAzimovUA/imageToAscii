const express = require('express');
const router = express.Router();

const { convertToImage } = require('../controllers/imageController');

router.route('/').get(convertToImage);

module.exports = router;
