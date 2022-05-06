const express = require('express')
const middleware = require('./middleware/middleware')
const app = express();
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}));


middleware(app)






app.listen(port, () => { //sobe o servidor na porta 3000
    console.log(`[servidor]: online na porta ${port}`)
})

