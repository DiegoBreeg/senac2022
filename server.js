const express = require('express')
const middleware = require('./middleware/middleware')
const app = express(); //instancia app a partir de express
const port = 3000 //porta do servidor

app.use(express.json()); //parseia para json automaticamente o corpo das req
app.use(express.urlencoded({extended: true})); //traduz as informações HTT


middleware(app)






app.listen(port, () => { //sobe o servidor na porta 3000
    console.log(`[servidor]: online na porta ${port}`)
})

