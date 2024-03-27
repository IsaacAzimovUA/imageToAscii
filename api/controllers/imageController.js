const { convertToAscii, DROPBOX_OPTIONS } = require('../services/imageService');
const BadRequestError = require('../errors/badRequestError');
const path = require('path');

const getOptions = (_req, res) => {
  res.status(200).json({ ...DROPBOX_OPTIONS });
};

const convertToImage = async (req, res) => {
  if (!req.files) {
    throw new BadRequestError('select image');
  }
  const IMAGE_FILE = path.resolve(__dirname, req.files.imageFile.tempFilePath);
  if (!req.body.options) {
    throw new BadRequestError('select options');
  }
  const OPTIONS = JSON.parse(req.body.options);
  const convertedImage = await convertToAscii(IMAGE_FILE, OPTIONS);
  res.status(200).json({ payload: convertedImage });
};

module.exports = { convertToImage, getOptions };
