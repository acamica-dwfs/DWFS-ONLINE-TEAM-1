const express = require('express')
const router = express.Router()
const albumesController = require('../controllers/albumes.controller')


router.get('/', albumesController.getAlbum)

router.get('/:id', albumesController.getAlbumById)

router.post('/',  albumesController.createAlbum)

router.put('/:id', albumesController.updateAlbum)

router.delete('/:id', albumesController.deleteAlbum)


module.exports = router
