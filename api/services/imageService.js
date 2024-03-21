const asciifyImage = require('asciify-image');

const convertToAscii = async (imageFile, options) => {
  const DEFAULT_OPTIONS = {
    fit: 'box',
    width: 100,
    height: 50,
  };

  return new Promise((resolve, rejected) => {
    asciifyImage(imageFile, options && DEFAULT_OPTIONS, (error, asciified) => {
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
};
