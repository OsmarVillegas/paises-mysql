const{Router}= require('express');

const router= Router();

const paisesCtrl = require("../controllers/paises.controller");

//Consultar todos los pais
router.get("/paises", paisesCtrl.getPaises);

//Consultar pais
router.get("/paises/:id", paisesCtrl.getPais);

//Crear pais
router.post("/paises", paisesCtrl.createPaises);

//Actualizar pais
router.put("/paises/:id", paisesCtrl.editPaises);

//Eliminar pais
router.delete("/paises/:id", paisesCtrl.deletePaises);

module.exports = router;
