const { convertToAscii } = require('../services/imageService');
const path = require('path');
let imagePath;

const convertToImage = async (_req, res) => {
  const imageFile = imagePath;
  const convertedImage = await convertToAscii(imageFile);
  res.status(200).json({ payload: convertedImage });
};
const uploadImage = async (req, res) => {
  imagePath = path.resolve(__dirname, req.files.imageFile.tempFilePath) || null;
  res
    .status(200)
    .json({ image: req.files.imageFile.name, message: 'image uploaded' });
};

module.exports = { convertToImage, uploadImage };
