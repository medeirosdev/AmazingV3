const User = require("../models/User")
const {Op} = require('sequelize')
const bcrypt = require('bcrypt')


//Configurar classe e Exportar

module.exports = class UserController {

    static async showMain(req, res) {
        res.render('pages/mainPage')
    }

    static async registerProduct(req , res){
        res.render('pages/registerProduct')
    }

    static async registerUser(req , res){
        res.render('pages/registerUser')
    }

    static async loginUser(req , res ){
        res.render('pages/loginUser')

        //Inicializar a Sessão do usuário
        
        
    }

    static async addUser(req , res){

        //Confirmar Password
        const confirmpasswordbody = req.body.confirmpassword
        const passwordbody = req.body.password

        //if(passwordbody != confirmpasswordbody){

        //}

        //create password
            const salt = await bcrypt.genSalt(12)
            const passwordHash = await bcrypt.hash(passwordbody, salt)


        const user = {
            name: req.body.name ,
            email: req.body.email,
            password : passwordHash
        }

        try {
            await User.create(user)

            req.flash('message' , 'Conta criada!!');

        req.session.save(()=>{
            res.redirect('/')
        })
        }catch(err){
            console.log(err)
        } 
    }

    static async loginUserPost(req, res){
        
    }


    static async listAccounts(req , res){

        const accountsList = await User.findAll({raw: true});
        console.log(accountsList)

        //const accounts = accountsList.map((result) => result.get({plain:true}))
        //let accountsQty = accounts.length

        //if( accountsQty === 0){
        //    accountsQty = false
        //}
        
        res.render('pages/listAccounts' , accountsList );



    }






}