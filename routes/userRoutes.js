//================================================================================
//Importando Rotas
    const express = require("express");
    const router = express.Router();
//================================================================================
//Importando Controller
    const UserController = require("../controllers/UserController")
//================================================================================
//Roteando Users
    router.get('/' , UserController.showMain);



//Exportando router
    module.exports = router