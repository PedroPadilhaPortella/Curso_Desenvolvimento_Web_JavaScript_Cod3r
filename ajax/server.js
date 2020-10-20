const bodyParser = require('body-parser')
const express = require('express')
const multer = require('multer')
const app = express()

app.use(express.static('.')) //esse middleware provê o servidor para os arquivos estáticos
app.use(bodyParser.urlencoded({extended: true})) //middleware para converter os dados de formulários em objetos
app.use(bodyParser.json()) //middleware para converter json para objetos

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, error => {
        if(error) {
            return res.send("An error ocurred!")
        }
        res.end("Concluído com sucesso!")
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 6
    })
})

app.get("/parimpar", (req, res) => {
    //receber dados do front => req.body, req.query, req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? "par": "impar"
    })
})
app.listen('8080', () => console.log("Executando na porta 8080..."))