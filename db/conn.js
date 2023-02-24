const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('amazing3' , 'gui' ,'guigui167', {
    host: 'localhost' ,
    dialect: 'mysql'
})

try {
    //sequelize.authenticate()
    console.log("Conectamos com sucesso")
} catch(err){
    console.log("Não foi possível" + err)
}



module.exports = sequelize;