import multer from 'multer'
import path from 'path'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/public/images')
    },
    filename: function (req, file, cb) {
        const newFileName = Date.now() + path.extname(file.originalname)
        cb(null, newFileName)
    }
});
const limits = {
    fileSize: 5 * 1024 * 1024
}
const fileFilter = function (req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
        return cb(null, true)
    } else {
        return cb(new Error('only images are allowed'), false)
    }
}

const uploads = multer({
    storage,
    limits,
    fileFilter
});
export default uploads