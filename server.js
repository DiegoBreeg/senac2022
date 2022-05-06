const express = require('express')
const middleware = require('./middleware/middleware')
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: true}));


middleware(app)






app.listen(3000, () => { //sobe o servidor na porta 3000
    console.log('Server Up!')
})

