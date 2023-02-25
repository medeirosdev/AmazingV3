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
//Conexão Sync
    conn.sync()
    .then( ()=> {
        app.listen(port)
        console.log("Rodando na porta" + port)
    })
    .catch((err)=> {console.log(err)})

//.sync({ force: true})
//================================================================================