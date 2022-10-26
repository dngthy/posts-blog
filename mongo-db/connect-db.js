const mongoose = require('mongoose')
const multer = require('multer')
const { GridFsStorage } = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')

const { MONGODB_URL } = process.env

const db = mongoose.connection

const connectDB = () => {
  mongoose.connect(MONGODB_URL, { useNewUrlParser: true })
  db.on('error', (error) => console.error(error))
  db.once('open', () => console.log('Connected to Database'))
}

let gfs

db.once('open', () => {
  gfs = Grid(db.db, mongoose.mongo)
  gfs.collection('uploads')
})

const storage = new GridFsStorage({
  url: MONGODB_URL,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = file.originalname
      const fileInfo = {
        filename,
        bucketName: 'p0st'
      }
      resolve(fileInfo)
    })
  }
})

const upload = multer({
  storage,
  limits: { fileSize: 1 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
      cb(null, true)
    } else {
      cb(null, false)
      const err = new Error('Only .png, .jpg and .jpeg format allowed!')
      err.name = 'Upload Unsuccessful'
      return cb(err)
    }
  }
}).array('attachments', 10)

module.exports = { connectDB, upload }
