const {Router} = require('express')
const router = Router()
const newsController = require('../controllers/newsContr')
const upload = require('../middleware/multerFileUploadMiddleware')

// upload.single('file'),

router.post('/create', upload.single('file'), newsController.create)
router.get('/get', newsController.getAll)
router.put('/get', newsController.update )
router.delete('/get', newsController.delete)



module.exports = router