const checkAuthAdmin = (req , res, next) =>{

    const userId = req.session.userid;

    if(!userId){
        req.flash('message' , "Você não está logado!!!");
        res.redirect('/login')
        
    }else if (userId != 999) {
        req.flash('message' , "Você não possui acesso a esta página!!");
        res.redirect('/login')
    } else {
        next();
        
    }
    



}

module.exports = checkAuthAdmin;