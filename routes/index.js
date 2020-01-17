const router = require('express').Router()

const md5Router = require('./md5')

router.use('/md5', md5Router)

// 404 Not Found response
router.use((req, res, next) => {
    res.sendStatus(404)
  })
  
module.exports = router