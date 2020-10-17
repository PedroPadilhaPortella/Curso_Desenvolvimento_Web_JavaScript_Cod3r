const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) //esse middleware provê o servidor para os arquivos estáticos
app.use(bodyParser.urlencoded({extended: true})) //middleware para converter os dados de formulários em objetos
app.use(bodyParser.json()) //middleware para converter json para objetos

app.listen('8080', () => console.log("Executando na porta 8080..."))