const router = require('express').Router()

const md5Router = require('./md5')
const sha1Router = require('./sha1')

router.use('/md5', md5Router)
router.use('/sha1', sha1Router)

// 404 Not Found response
router.use((req, res, next) => {
  res.sendStatus(404)
})

module.exports = router
