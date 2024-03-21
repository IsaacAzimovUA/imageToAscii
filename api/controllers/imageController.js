const { convertToAscii } = require('../services/imageService');
const path = require('path');

const convertToImage = async (req, res) => {
  const IMAGE_FILE = path.resolve(__dirname, req.files.imageFile.tempFilePath);
  const OPTIONS = req.body;
  console.log('convertToImage ~ OPTIONS:', OPTIONS);

  const convertedImage = await convertToAscii(IMAGE_FILE, OPTIONS);
  res.status(200).json({ payload: convertedImage });
};

module.exports = { convertToImage };
