const crypto = require('crypto-js')

const {controllerFactory} = require('../utils')

module.exports.md5 = controllerFactory(crypto.HmacMD5, crypto.MD5)