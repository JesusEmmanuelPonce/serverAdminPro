const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs')

// Mostrar usuarios
exports.getUsuarios = async (req, res) => {

    try {
        const usuarios = await Usuario.find();
        res.json({
            ok: true,
            usuarios
        })
    } catch (error) {
        console.log(error)
        res.status(5000).json({
            ok: false,
            msg: 'Error inesperado en el servidor'
        })
    }
}

// Crear usuario
exports.crearUsuarios = async (req, res) => {
    
    const { email, password } = req.body

    try {
        const existeEmail = await Usuario.findOne({ email })
        if(existeEmail){
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe el email'
            })
        }

        const usuario = new Usuario(req.body)

        // Encriptar
        const salt = bcrypt.genSaltSync()
        usuario.password = bcrypt.hashSync(password, salt)
        
        // Guardar
        await usuario.save()

        res.json({
            ok: true,
            usuario
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado en el servidor'
        })
    }
}

// actualizar usuario
exports.actualizarUsuario = async(req, res) => {

    const id = req.params.id

    try {
        const usuarioDB = await Usuario.findById( id )

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false, 
                msg: 'No existe usuario con ese id'
            })
        }

        // Actualizaciones
        const campos = req.body

        if (usuarioDB.email === req.body.email) {
            delete campos.email            
        } else {
            const existeEmail = await Usuario.findOne({email: req.body.email})
            if(existeEmail){
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe usuario con ese email'
                })
            }
        }

        delete campos.password
        delete campos.google

        const usuarioActualizado = await Usuario.findByIdAndUpdate(id, campos, {new: true})

        res.json({
            ok: true,
            usuario: usuarioActualizado
        })
    } catch (error) {
        console.log(error)
        res.status(5000).json({
            ok: false,
            msg: 'Error inesperado en el servidor'
        })
    }
}