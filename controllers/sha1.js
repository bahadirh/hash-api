const crypto = require('crypto-js')

const {controllerFactory} = require('../utils')

module.exports.sha1 = controllerFactory(crypto.HmacSHA1, crypto.SHA1)
