const express = require('express');
const  bodyParser = require('body-parser');
const router = require('./src/routes/routes.js')
const db = require('./src/database/connection.js');


db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})



const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.get('/',(req,res) => {
    res.send("Bem vindo a nossa api com mongoDB :)");
})

app.listen(PORT, (req,res) => {
    console.log("servidor rodando na porta: " + PORT);
})
