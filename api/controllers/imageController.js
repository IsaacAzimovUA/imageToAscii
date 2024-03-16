const { convertToAscii } = require('../services/imageService');

const path = require('path');
const imagePath = path.resolve(__dirname, '../images/tux.png');

const convertToImage = async (req, res) => {
  //req.imageFile
  const imageFile = imagePath;
  const convertedImage = await convertToAscii(imageFile);
  res.status(200).json({ payload: convertedImage });
};

module.exports = { convertToImage };
