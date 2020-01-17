const crypto = require('crypto-js')

module.exports.controllerFactory = (
  hmacFn,
  hashFn,
  format = crypto.enc.Hex
) => (req, res, next) => {
  try {
    let hash
    if (req.fields.key) {
      hash = hmacFn(req.fields.data, req.fields.key).toString(format)
    } else {
      hash = hashFn(req.fields.data).toString(format)
    }
    return res.json({
      status: 'success',
      data: {key: req.fields.key, data: req.fields.data, hash}
    })
  } catch (error) {
    return res.sendStatus(400)
  }
}
