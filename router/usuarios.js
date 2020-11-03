/*
    Rutas usuarios
    /api/usuarios
*/

const usuarioController = require('../controllers/usuarios')
const { Router } = require('express')

const router = Router()

router.get('/', usuarioController.getUsuarios)

module.exports = router