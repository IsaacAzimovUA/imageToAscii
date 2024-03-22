const asciifyImage = require('asciify-image');

const DEFAULT_OPTIONS = {
  fit: 'box',
  width: 100,
  height: 50,
};
const DROPBOX_OPTIONS = {
  fit: ['box', 'width', 'height', 'original'],
};

const convertToAscii = async (imageFile, options) => {
  console.log('convertToAscii ~ options:', options);
  return new Promise((resolve, rejected) => {
    asciifyImage(imageFile, options, (error, asciified) => {
      if (error) {
        rejected(error);
      } else {
        resolve(asciified);
      }
    });
  });
};

module.exports = {
  convertToAscii,
  DROPBOX_OPTIONS,
};
