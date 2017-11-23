const express = require('express')
const router = express.Router()
const tv = require('../controllers/tvController')

router.get('/', tv.all)
router.post('/', tv.create)
router.put('/:id', tv.update)
router.delete('/:id', tv.delete)

module.exports = router
