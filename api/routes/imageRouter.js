const express = require('express');
const router = express.Router();

const { convertToImage } = require('../controllers/imageController');

router.route('/convert').post(convertToImage);

module.exports = router;
