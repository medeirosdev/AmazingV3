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

router.get('/registerProduct' , checkAuth , ProductController.registerProduct);
router.post('/createProduct' ,checkAuth , ProductController.createProduct);

router.get('/homeProducts' , ProductController.showProducts);



module.exports = router;







