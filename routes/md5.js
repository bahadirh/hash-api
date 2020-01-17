const router = require('express').Router()
const {md5} = require('../controllers/md5')

router.post('/', md5)

module.exports = router
