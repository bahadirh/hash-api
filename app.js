const express = require('express')
const formidable = require('express-formidable')
const md5 = require('react-native-md5')

const app = express()

app.use(formidable())

app.post('/md5', (req, res, next) => {
  try {
    let hash
    if (req.fields.key) {
      hash = md5.hex_hmac_md5(req.fields.key, req.fields.data)
    } else {
      hash = md5.hex_md5(req.fields.data)
    }
    return res.json({
      status: 'success',
      hash
    })
  } catch (error) {
    return res.sendStatus(400)
  }
})

app.use((req, res, next) => {
  res.sendStatus(404)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, function() {
  console.log('Server listening on port ' + PORT)
})
