const User = require("../models/User")
const {Op} = require('sequelize')
const bcrypt = require('bcrypt')
const db = require('../db/conn')


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
        const email = req.body.email;
        const checkIfUserExists = await User.findOne({where: {email : email}})

        if(checkIfUserExists){
            req.flash('message' , "O e-mail já está em Uso!");
            res.render('pages/registerUser')

            return
        }


        //Confirmar Password
        const confirmpasswordbody = req.body.confirmpassword
        const passwordbody = req.body.password

        if(passwordbody != confirmpasswordbody){
            req.flash('message' , "Senhas divergem!");
            res.render('pages/registerUser')
        }

        //create password
            const salt = await bcrypt.genSalt(12)
            const passwordHash = await bcrypt.hash(passwordbody, salt)


        const user = {
            name: req.body.name ,
            email:email,
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
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({ where: { email : email}})

        if(!user){
            req.flash('message' , 'Usuário Não Encontrado!, Email já cadastrado')
            res.render('pages/login')
            return
        }

        //Password Match ==================================================

        const passwordMatch = bcrypt.compareSync(password , user.password );
        if(!passwordMatch){
            req.flash('message' , 'Senha Incorreta')
            res.render('pages/login')
            return

        }
            //Inicializar a Sessão do usuário ========================
            req.session.userid = user.id

            req.flash('message' , 'Bem vindo(a)!');

            req.session.save(() => {
                res.redirect('/')
            })
        
    }


    static async listAccounts(req , res){
        //const accountsList = await User.findAll({raw: true});
        //console.log(accountsList)

        const accounts = await User.findAll(
            {raw: true})

        //const accounts = accountsList.map((result) => result.get({plain : true}))
        
        res.render('pages/listAccounts' , {accounts} );
    }

    static async sairConta(req ,res ){
        req.session.destroy();
        res.redirect('/');
    }






}