const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs')

exports.login = async(req, res) => {
    
    const { email, password } = req.body

    try {

        const usuarioDB = await Usuario.findOne({ email })

    if(!usuarioDB){
        res.status(404).json({
            ok: false,
            msg: 'Email no existente'
        })
    }

    const validPassword = bcrypt.compareSync( password, usuarioDB.password )

    if ( !validPassword) {
        return res.status(404).json({
            ok: false,
            msg: 'Contraseña no valida'
        })
    }

        res.json({
            ok: true,
            msg: 'Succes'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        })
    }
}