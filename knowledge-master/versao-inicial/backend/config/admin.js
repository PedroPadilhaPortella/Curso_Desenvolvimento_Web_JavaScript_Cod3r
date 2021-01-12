module.exports = middleware => {
    //acesso a rotas protegidas apenas se a propriedade admin for true
    return (req, res, next) => {
        if(req.user.admin) {
            middleware(req, res, next)
        } else {
            res.status(401).send('Usuário não é administrador')
        }
    }
}