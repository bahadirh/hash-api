const router = require('express').Router()

const controllers = require('../controllers')

Object.keys(controllers).forEach(handler =>
  router.use(`/${handler}`, controllers[handler])
)

// 404 Not Found response
router.use((req, res, next) => {
  res.sendStatus(404)
})

module.exports = router
