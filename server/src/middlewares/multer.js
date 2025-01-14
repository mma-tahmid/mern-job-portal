const multer = require('multer')

const storage = multer.memoryStorage();

exports.SingleUpload = multer({ storage }).single("file") // this "file" comes input type: file 

