const User = require("../models/User")
const Product = require('../models/Product');
const {Op} = require('sequelize')
const bcrypt = require('bcrypt')
const db = require('../db/conn')

module.exports = class ProductController {

    static async registerProduct (req, res){
        res.render('pages/registerProduct')
    }

    static async showProducts(req , res){
        const listProducts = await Product.findAll({raw:true , include: User,});

        res.render('pages/homeProducts', {listProducts})
        


    }

    static async createProduct (req ,res){
        const price = req.body.price;
        const priceFloat = parseFloat(price)
        const product = {
            name: req.body.name ,
            price: priceFloat,
            url: req.body.url,
            description: req.body.description,
            UserId: req.session.userid
        }

        try{
            await Product.create(product);
            req.flash('message' , 'Produto Adicionado!')
            res.redirect('/')
        }catch(err){
            console.log(err);
        }

        

    }


}