function salvar(req, res) {
    res.send("salvando...")
}

function obter(req, res) {
    res.send("obtendo...")
}

module.exports = { salvar, obter }