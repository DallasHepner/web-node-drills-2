require('dotenv').config()

const port = process.env.PORT || 3035
const express = require('express')
const cors = require('cors')
const ctrl = require('./controller')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/info', ctrl.getInputs)
app.post('/api/info', ctrl.createInput)

app.listen(port, () => console.log(`listening on port ${port}`))