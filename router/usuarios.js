/*
    Rutas usuarios
    /api/usuarios
*/

const usuarioController = require('../controllers/usuarios')
const { Router } = require('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')

const router = Router()

router.get('/', usuarioController.getUsuarios)
router.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos
    ],
    usuarioController.crearUsuarios)

module.exports = router