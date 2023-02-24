const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Product = db.define('Product' , {
    name: {
        type: DataTypes.STRING ,
        allowNull : false ,
        require: true,
    },
    description: {
        type: DataTypes.STRING ,
        allowNull : false ,
        require: true,
    },
    id: {
        type: DataTypes.STRING ,
        allowNull : false ,
        require: true,
    },
    price: {
        type: DataTypes.FLOAT ,
        allowNull : false ,
        require: true,
    },


})

module.exports = Product