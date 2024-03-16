const asciifyImage = require('asciify-image');

const convertToAscii = async (imageFile) => {
  const options = {
    fit: 'box',
    width: 200,
    height: 100,
  };

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
};
