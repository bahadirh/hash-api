const express = require('express')
const formidable = require('express-formidable')
const crypto = require('crypto-js')

const app = express()

app.use(formidable())

app.post('/md5', (req, res, next) => {
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
})

app.use((req, res, next) => {
  res.sendStatus(404)
})

const PORT = process.env.PORT || 5000

app.listen(PORT)
