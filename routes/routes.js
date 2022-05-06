const { Router } = require('express');
const path = require('path')
const routes = Router()


routes.get('/', (req ,res) => {
        
    console.log('[server]: requisição em /')        
    res.sendFile(path.resolve() + '/viwer/index.html')
})

routes.get('/script', (req ,res) => {
        
    console.log('[server]: requisição em /')        
    return res.sendFile(path.resolve() + '/viwer/index.js')
})

routes.post('/', (req, res) => {

    console.log(JSON.stringify(req.body))
    return res.status(200)

})

module.exports = routes