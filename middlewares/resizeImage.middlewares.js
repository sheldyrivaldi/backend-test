const sharp = require('sharp');
const path = require('path');
const resizeImage = (size) => {
  return (req, file, next) => {
    const filePath = `./assets/${size}-${req.body.name}-${req.file.originalname}`.split(' ').join('-')
    sharp(req.file.buffer)
      .resize({ width: size, height: size })
      .toFile(filePath)
      .then(() => {
        next();
      })
      .catch(next);
  };
};

module.exports = resizeImage;
