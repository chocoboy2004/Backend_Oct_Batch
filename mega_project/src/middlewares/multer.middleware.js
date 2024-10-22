import multer from "multer"

const storage = multer.diskStorage(
    {
        destination: function(req, file, cb) {
            cb(null, "public/temp")
        },
        filename: function(req, file, cb) {
            cb(null, file.originalname)
        }
    }
)

const upload = multer({ storage: storage })

export default upload


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/tmp/my-uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   })
  
//   const upload = multer({ storage: storage })