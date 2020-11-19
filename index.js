require('dotenv').config()
const express = require("express")
const cors = require('cors')
const { connection } = require('./database')

const app = express()
app.use(cors())
app.use(express.json())

// Conexion
connection()

// rutas
app.use('/api/usuarios', require('./router/usuarios'))
app.use('/api/hospitales', require('./router/hospitales'))
app.use('/api/login', require('./router/auth'))

app.listen(process.env.PORT, () => {
    console.log(`Server ${process.env.PORT}`)
})