//import express from 'express';

const porta = 3003;
const express = require('express');
const app = express();
const bancoDeDados = require('./bancoDeDados');

app.get('/produtos', (req, res, next)=> {
    res.send(bancoDeDados.getProdutos());
})

app.get('/produtos/:id', (req, res, next)=> {
    res.send(bancoDeDados.getProduto(req.params.id));
})

app.listen(porta, () => {
    console.log(`Sevidor rodando na porta ${porta}.`)
});