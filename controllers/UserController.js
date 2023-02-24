//Configurar classe e Exportar

module.exports = class UserController {

    static async showMain(req, res) {
        res.render('pages/mainPage')
    }

    static async registerProduct(req , res){
        res.render('pages/registerProduct')
    }





}