const User = require("../models/User")
const Product = require('../models/Product');
const {Op} = require('sequelize')
const bcrypt = require('bcrypt')
const db = require('../db/conn')

module.exports = class ProductController {

    static async registerProduct (req, res){
        res.render('pages/registerProduct')
    }

    static async createProduct (req ,res){
        const product = {
            name: req.body.name ,
            price: req.body.price,
            description: req.body.description,
            UserId: req.session.userid
        }

        

    }


}