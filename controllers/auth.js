const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs')
const { generarJWT } = require('../helpers/jwt')

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

    // token
    const token = await generarJWT(usuarioDB._id)

    res.json({
        ok: true,
        email,
        msg: 'Succes',
        token
    })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            ok: false,
            msg: 'Error inesperado'
        })
    }
}

exports.revalidate = async(req, res) => {

    const id = req.id;

    const token = await generarJWT(id)

    res.json({
        ok: true,
        id,
        token
    })
}