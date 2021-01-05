module.exports = (app, produto) => {
    
    function salvar(req, res) {
        res.send('salvando produto ' + produto)
    }

    function obter(req, res) {
        res.send('obtendo produto ' + produto)
    }

    app.post('/produto', salvar)
    app.get('/produto', obter)

    return { salvar, obter}
}