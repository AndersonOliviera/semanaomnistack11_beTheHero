//
const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()
//
app.use(cors())
//
app.use(express.json())
app.use(routes)
//Node por padrão roda na porta 3333
app.listen(3333)
