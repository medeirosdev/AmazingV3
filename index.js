//===================================Configurações===============================
//Config Módulos
    const express = require('express')
    const exphbs = require("express-handlebars")
    const session = require('express-session')
    const fileStore = require('session-file-store')(session)
    const flash = require('express-flash')
    const path = require('path')
//================================================================================


//Importar Banco de Dados
    const conn = require("./db/conn")
//================================================================================
//Instanciar express

    const app = express();
    const port = 3003;


//================================================================================
//const flash = require('express-flash')
// Flash Messages
    app.use(flash()) // Necessário usar ANTES dos app.use rotas
//================================================================================
//Session Middleware - Diz onde o handlebars vai salvar as sessões
app.use(
    session({
        name: "session" , 
        secret: "nosso_secret" ,
        resave: false,
        saveUninitialized : false,
        store : new fileStore({
            logFn : function() {} ,
            path: path.join(require('os').tmpdir() , 'sessions'),
        }),
        cookie : {
            secure: false,
            maxAge: 360000 ,
            expires: new Date(Date.now() + 360000) ,
            httpOnly: true
        }
    })
)
// set session to res
    app.use((req, res , next)=> {
        if(req.session.userid) {
        res.locals.session = req.session
        }

    next()
})
//================================================================================
//Handlebars
    app.set('view engine' , 'handlebars')
    app.set('views', path.join(__dirname, 'views'));
    app.engine('handlebars' , exphbs.engine({
        extname:'handlebars' ,
        defaultLayout : 'main' ,
        layoutsDir:  path.join(__dirname + '/views/layouts'), 
}))
// Config a pasta Public
    app.use(express.static(__dirname + '/public'));
//================================================================================
//Receber Respostas do Body
    app.use(
        express.urlencoded({
            extended:true
        })
    )

    app.use(express.json())
//================================================================================
//Importando e Usando Rotas criadas
    const userRoutes = require('./routes/userRoutes')
    app.use('/' , userRoutes)
//================================================================================
//Importando Models! sync() irá automaticamente conectar e criar essas tabelas na database
    const User = require('./models/User');

//================================================================================





//================================================================================
//Conexão Sync
    conn.sync()
    .then( ()=> {
        app.listen(port)
        console.log("Rodando na porta" + port)
    })
    .catch((err)=> {console.log(err)})

//.sync({ force: true})
//================================================================================