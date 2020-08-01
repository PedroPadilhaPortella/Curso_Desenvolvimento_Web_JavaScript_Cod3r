const express = require('express');
const app = express();
const porta = 3003;

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', modelo: 'Lenovo', preco: 2999.99}) //converte para JSON
})

app.listen(porta, () => {
    console.log(`Servidor Online na porta ${porta}!`)
})