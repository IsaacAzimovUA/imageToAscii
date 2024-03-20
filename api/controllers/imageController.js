const { convertToAscii } = require('../services/imageService');
const path = require('path');

const convertToImage = async (req, res) => {
  const imageFile = path.resolve(__dirname, req.files.imageFile.tempFilePath);
  const convertedImage = await convertToAscii(imageFile);
  res.status(200).json({ payload: convertedImage });
};

module.exports = { convertToImage };
