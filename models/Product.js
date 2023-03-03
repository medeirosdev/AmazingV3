const { DataTypes } = require('sequelize')
const User  = require('./User');

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
    price: {
        type: DataTypes.FLOAT ,
        allowNull : false ,
        require: true,
    },
    UserId: {
        type: DataTypes.INTEGER ,
        allowNull : false ,
        require: true,
    },
    


})

Product.belongsTo(User)
User.hasMany(Product)

module.exports = Product