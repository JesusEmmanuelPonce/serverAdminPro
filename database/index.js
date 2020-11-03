const mongoose = require('mongoose')

const connection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('DB online')
    } catch (error) {
        console.log(error)
        throw new Error('Error al iniciar BD')
    }
}

module.exports = {
    connection
}
