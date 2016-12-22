'use strict'
const express = require('express')
const compression = require('compression')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(compression())
app.use(express.static('dist'))

let port = process.env.PORT || 5000

app.listen(port, () => {
  console.log('Listening on port ' + port)
})
