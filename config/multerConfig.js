const multer = require('multer');
path = require("path");

const videoStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      if (file.mimetype === "video/mp4" || file.mimetype ==='video/webm') {
        cb(null, path.join(__dirname, "../files"));
      } else {
        cb({ message: "This file is not in video format." }, false);
      }
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

  const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype=== 'image/jfif') {
        cb(null, path.join(__dirname, "../files"));
      } else {
        cb({ message: "This file is not an image file" }, false);
      }
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  module.exports = {
    imageUpload: multer({ storage: imageStorage }),
    videoUpload: multer({ storage: videoStorage }),
  };