import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});

export default multer({storage});