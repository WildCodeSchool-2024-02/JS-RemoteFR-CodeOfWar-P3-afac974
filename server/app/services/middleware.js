const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const fs = require("fs");

const path = require("path");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./public/assets/images/uploads");
  },
  filename(req, file, cb) {
    const id = uuidv4();
    const pictureName = `${id}${path.extname(file.originalname)}`;
    req.body.image_url = `/assets/images/uploads/${pictureName}`;
    cb(null, pictureName);
  },
});
const uploadImg = (req, res, next) => {
  const upload = multer({ storage });
  return upload.single("image")(req, res, next);
};

const checkAdminStatus = (req, res, next) => {
  if (req.auth && req.auth.isAdmin) {
    next();
  } else {
    res.status(403).json({
      message:
        "Accès refusé. Vous devez être administrateur pour supprimer une exposition.",
    });
  }
};

const deleteImageFile = (imagePath) => {
  fs.unlink(imagePath, (err) => {
    if (err) {
      console.info(`Failed to delete image: ${err.message}`);
    } else {
      console.info(`Successfully deleted image: ${imagePath}`);
    }
  });
};

module.exports = { deleteImageFile, uploadImg, checkAdminStatus };
