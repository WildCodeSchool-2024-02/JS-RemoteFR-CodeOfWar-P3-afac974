const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const path = require("path");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./public/assets/images/PicturesTest");
  },
  filename(req, file, cb) {
    const id = uuidv4();
    console.info(id);
    const pictureName = `${id}${path.extname(file.originalname)}`;
    req.body.image_url = pictureName;
    cb(null, pictureName);
  },
});
const uploadImg = (req, res, next) => {
  const upload = multer({ storage });
  return upload.single("image")(req, res, next);
};

const checkAdminStatus = (req, res, next) => {
  console.info(req.auth)
  if (req.auth && req.auth.isAdmin) {
    next(); // L'utilisateur est un admin, on continue
  } else {
    res.status(403).json({ message: "Accès refusé. Vous devez être administrateur pour supprimer une exposition." });
  }
};

module.exports = { uploadImg, checkAdminStatus };
