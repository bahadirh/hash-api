const crypto = require('crypto-js')

const {controllerFactory} = require('../utils')

module.exports.md5 = controllerFactory(crypto.HmacMD5, crypto.MD5)
module.exports.sha1 = controllerFactory(crypto.HmacSHA1, crypto.SHA1)
module.exports.sha224 = controllerFactory(crypto.HmacSHA224, crypto.SHA224)
module.exports.sha256 = controllerFactory(crypto.HmacSHA256, crypto.SHA256)
module.exports.sha512 = controllerFactory(crypto.HmacSHA512, crypto.SHA512)
module.exports.sha3 = controllerFactory(crypto.HmacSHA3, crypto.SHA3)
module.exports.sha384 = controllerFactory(crypto.HmacSHA384, crypto.SHA384)
module.exports.ripemd160 = controllerFactory(
  crypto.HmacRIPEMD160,
  crypto.RIPEMD160
)
