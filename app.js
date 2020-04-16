const express = require('express')
const formidable = require('express-formidable')
const cors = require('cors')

const routes = require('./routes')

const app = express()

app.use(cors({credentials: true, origin: true}))
app.use(formidable())

app.use('/', routes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
