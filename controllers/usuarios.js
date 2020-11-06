const Usuario = require('../models/usuario')

exports.getUsuarios = async (req, res, next) => {

    try {

        const usuarios = await Usuario.find();

        res.json({
            ok: true,
            usuarios
        })
    } catch (error) {
        console.log(error)
        next()
    }
}

exports.crearUsuarios = async (req, res, next) => {
    
    const { nombre, email, password } = req.body

    try {

        const existeEmail = await Usuario.findOne({ email })

        if(existeEmail){
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe el email'
            })
        }

        const usuario = new Usuario(req.body)
        await usuario.save()

        res.json({
            ok: true,
            usuario
        })

    } catch (error) {
        console.log(error)
        next()
    }
}