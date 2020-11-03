require('dotenv').config()
const express = require("express")
const cors = require('cors')
const { connection } = require('./database')
const usuarios = require('./router/usuarios')

const app = express()
app.use(cors())

connection()

app.use('/api/usuarios', usuarios)

app.listen(process.env.PORT, () => {
    console.log(`Server ${process.env.PORT}`)
})