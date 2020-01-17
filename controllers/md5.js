const crypto = require('crypto-js')

module.exports.md5 = (req, res, next) => {
    try {
      let hash
      if (req.fields.key) {
        hash = crypto.HmacMD5(req.fields.data, req.fields.key).toString(crypto.enc.Hex)
      } else {
        hash = crypto.MD5(req.fields.data).toString(crypto.enc.Hex)
      }
      return res.json({
        status: 'success',
        hash
      })
    } catch (error) {
      return res.sendStatus(400)
    }
  }