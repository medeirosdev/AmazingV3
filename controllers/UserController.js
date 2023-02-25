const User = require('../')


//Configurar classe e Exportar

module.exports = class UserController {

    static async showMain(req, res) {
        res.render('pages/mainPage')
    }

    static async registerProduct(req , res){
        res.render('pages/registerProduct')
    }

    static async loginUser(req , res){
        res.render('pages/login')
    }

    static async addUser(req , res){
        const user = {
            name: req.body.title ,
            email: req.body.email.
            password :
        }
    }





}