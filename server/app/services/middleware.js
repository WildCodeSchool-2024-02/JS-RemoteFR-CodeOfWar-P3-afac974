import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from 'uuid';




const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./public/uploads")
  },
  filename(req, file, cb) {
    const id = uuidv4();
    console.info(id);
    const pictureName = `${id}${path.extname(file.originalname)}`;
    req.body.image_url = pictureName;
    cb(null, pictureName)
  }
})
const uploadImg = (req, res, next) => {

  const upload = multer({ storage });
  return upload.single("image")(req, res, next);
}

export default uploadImg;