/*
    Rutas medicos
    /api/medicos
*/

const medicoController = require('../controllers/medicos')
const { Router } = require('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router()

router.get('/', medicoController.getMedicos)

router.post('/', 
    [
    ],
    medicoController.crearMedico)

router.put('/:id', 
    [
    ],
    medicoController.actualizarMedico)

router.delete('/:id', medicoController.eliminarMedico)

module.exports = router