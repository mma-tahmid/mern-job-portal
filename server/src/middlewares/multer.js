const multer = require('multer')

const storage = multer.memoryStorage();

exports.SingleUpload = multer({ storage }).single("file") // this "file" comes input type: file 

// const multer = require("multer");

// const storage = multer.memoryStorage();

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === "application/pdf") {
//         cb(null, true);
//     } else {
//         cb(new Error("Only PDF files are allowed"), false);
//     }
// };

// exports.SingleUpload = multer({
//     storage,
//     limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
//     fileFilter,
// }).single("file");

