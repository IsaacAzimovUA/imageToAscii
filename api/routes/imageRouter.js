const express = require('express');
const router = express.Router();

const {
  convertToImage,
  uploadImage,
} = require('../controllers/imageController');

router.route('/').get(convertToImage);
router.route('/upload').post(uploadImage);

module.exports = router;
