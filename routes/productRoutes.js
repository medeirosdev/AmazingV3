//================================================================================
//Importando Rotas
const express = require("express");
const router = express.Router();
//================================================================================
//Import Autorização
const checkAuth = require('../helpers/auth');

//Importando Controller
const ProductController = require("../controllers/ProductController")
//================================================================================

router.get('/registerProduct' , ProductController.registerProduct);

router.post('/')



module.exports = router;







