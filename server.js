import express from "express";
const app = express();

app.use(express.static('pages')) //torna os arquivos da pas pages públicos

app.listen(3000, () => { //sobe o servidor na porta 3000
    console.log('Server Up!')
})

