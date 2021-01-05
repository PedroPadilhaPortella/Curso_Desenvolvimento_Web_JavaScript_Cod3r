const express = require('express');
const app = express();
const door = 3000;

const saudacao = require('./middleware');

app.use(saudacao("Pedro Portella"))


const bodyParser = require('body-parser');

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const usuarioApi = require('./api/usuario');

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)


const produtoApi = require('./api/produto')
produtoApi(app, 'Galaxy S7 2016')
// require('./api/produto')(app, 'IPhone 7 pro')


app.get('/cliente/relatorio', (req, res) => {
    res.send(`Relatório do cliente ${req.query.cliente}, ano ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
        res.send(req.body)
        // res.send(req.body.nome)
        // res.json(JSON.parse(corpo))
    // })
})

app.get('/cliente/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.use('/', (req, res, next) => {
    console.log('antes...')
    next()
})
app.use('/teste', (req, res, next) => {
    console.log('durante...')
    next()
})
app.use('/teste', (req, res, next) => {
    console.log('depois...')
    next()
})

app.get('/', (req, res) => {
    // res.send("<h1>I'm fine.</h1>")

    // res.json({
    //     name: 'xbox 360',
    //     price: 2400.00,
    //     holder: 'pedro portella',
    //     discount: 0.2
    // })
    
    res.json({
        data: [
            {id: 1, name: 'pedro', result: 10},
            {id: 2, name: 'max', result: 7},
            {id: 3, name: 'bunhak', result: 6},
            {id: 4, name: 'casalli', result: 8},
            {id: 5, name: 'vinicius', result: 9}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
})


app.listen(door, () => {
    console.log(`Backend executando na porta ${door}...`)
})