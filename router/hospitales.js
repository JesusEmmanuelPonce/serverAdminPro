/*
    Rutas hospitales
    /api/hospitales
*/

const hospitalController = require('../controllers/hospitales')
const { Router } = require('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router()

router.get('/', hospitalController.getHospitales)

router.post('/', 
    [
    ],
    hospitalController.crearHospital)

router.put('/:id', 
    [
    ],
    hospitalController.actualizarHospital)

router.delete('/:id', hospitalController.eliminiarHospital)

module.exports = router