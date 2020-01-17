const router = require('express').Router()
const {sha1} = require('../controllers/sha1')

router.post('/', sha1)

module.exports = router
