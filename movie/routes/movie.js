const express = require('express')
const router = express.Router()
const Movie = require('../controller/movieController')

router.get('/', Movie.all)
router.post('/', Movie.create)
router.put('/:id', Movie.update)
router.delete('/:id', Movie.delete)

module.exports = router
