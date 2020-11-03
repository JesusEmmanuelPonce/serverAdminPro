require('dotenv').config()
const express = require("express")
const cors = require('cors')
const { connection } = require('./database')

const app = express()
app.use(cors())

connection()

app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'hola'
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server ${process.env.PORT}`)
})