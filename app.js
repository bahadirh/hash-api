const express = require('express')
const formidable = require('express-formidable')

const routes = require('./routes')

const app = express()

app.use(formidable())

app.use('/', routes)

const PORT = process.env.PORT || 5000

app.listen(PORT)
