const { convertToAscii, DROPBOX_OPTIONS } = require('../services/imageService');
const path = require('path');

const getOptions = (_req, res) => {
  res.status(200).json({ ...DROPBOX_OPTIONS });
};

const convertToImage = async (req, res) => {
  const IMAGE_FILE = path.resolve(__dirname, req.files.imageFile.tempFilePath);
  const OPTIONS = JSON.parse(req.body.options);

  const convertedImage = await convertToAscii(IMAGE_FILE, OPTIONS);
  res.status(200).json({ payload: convertedImage });
};

module.exports = { convertToImage, getOptions };
