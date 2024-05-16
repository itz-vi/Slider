const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './routes/uploads')
    },
    filename: function (req, file, cb) {
        const uniquename = uuidv4();
        cb(null, uniquename + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });
module.exports = upload;



// const upload = multer({ storage: storage, limits: { files: 2 } });
