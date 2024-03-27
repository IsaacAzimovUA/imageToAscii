const asciifyImage = require('asciify-image');

const DEFAULT_OPTIONS = {
  fit: 'box',
  width: 100,
  height: 50,
};
const DROPBOX_OPTIONS = {
  fit: ['original', 'width', 'height', 'box'],
};

const convertToAscii = async (imageFile, options) => {
  return new Promise((resolve, rejected) => {
    asciifyImage(imageFile, options || DEFAULT_OPTIONS, (error, asciified) => {
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
