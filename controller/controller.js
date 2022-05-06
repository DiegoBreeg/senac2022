const path = require('path');

const controller =

    {
        home: function home(req, res) {            
        
            console.log('[server]: requisição em /')        
            return res.status(200).sendFile(path.resolve() + '/viwer/index.html')
        },
        script: function script(req, res) {                 
        
            console.log('[server]: requisição em /')        
            return res.status(200).sendFile(path.resolve() + '/viwer/index.js')
        }, 
        post: function post(req, res) {           

            console.log(JSON.stringify(req.body))
            return res.status(200)            
            
        }
    }

module.exports = controller