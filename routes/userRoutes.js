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

    router.get('/register' , UserController.registerProduct)

    router.get('/login'  , UserController.loginUser)
    router.post('/login/addUser' , UserController.addUser)



//Exportando router
    module.exports = router