const crypto = require('crypto-js')

module.exports.controllerFactory = (
  hmacFn,
  hashFn,
  format = crypto.enc.Hex
) => (req, res, next) => {
  try {
    let hash
    if (req.fields.key) {
      hash = hmacFn(String(req.fields.data), String(req.fields.key)).toString(
        format
      )
    } else {
      hash = hashFn(String(req.fields.data)).toString(format)
    }
    return res.json({
      status: 'success',
      data: {key: req.fields.key, data: req.fields.data, hash}
    })
  } catch (error) {
    return res.status(400).json({status: 'error', data: error.message})
  }
}
