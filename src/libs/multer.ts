import multer from 'multer';

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});

export default multer({storage});