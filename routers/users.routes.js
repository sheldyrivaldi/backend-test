const express = require('express');
const router = express.Router()
const userControllers = require('../controllers/users.controllers')
const multer = require('../middlewares/multer.middlewares');
const resizeImage = require('../middlewares/resizeImage.middlewares');

router.get('/api/users', userControllers.find)
router.post('/api/users', multer.single('image'), resizeImage(500), resizeImage(1000), userControllers.create)
router.get('/api/users/:id', userControllers.findById)
router.put('/api/users/:id',multer.single('image'), userControllers.updateById)


module.exports = router