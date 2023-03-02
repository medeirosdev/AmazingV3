//================================================================================
//Importando Rotas
    const express = require("express");
    const router = express.Router();
//================================================================================
//Import Autorização
    const checkAuth = require('../helpers/auth');

//Importando Controller
    const UserController = require("../controllers/UserController")
//================================================================================
//Roteando Users
    router.get('/' , UserController.showMain);

    router.get('/registerproduct' , UserController.registerProduct);

    router.get('/register'  , UserController.registerUser);
    router.post('/register/addUser' , UserController.addUser);

    router.get('/login' , UserController.loginUser);
    router.post('/login/loginUser' , UserController.loginUserPost);

    router.get('/accounts' ,  UserController.listAccounts);



//Exportando router
    module.exports = router