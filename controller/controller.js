const path = require('path');

const controller =

    {
        home: function home(req, res) {            
        
            console.log('[server]: requisição da página HOME')        
            return res.status(200).sendFile(path.resolve() + '/viwer/index.html')
        },
        script: function script(req, res) {                 
        
            console.log('[server]: requisição do script de POST de HOME')        
            return res.status(200).sendFile(path.resolve() + '/viwer/index.js')
        }, 
        post: function post(req, res) {  

            console.log('[server]: POST feito para root (/)')
            console.log('\n')
            console.log(JSON.stringify(req.body))
            console.log('\n')
            return res.status(200)            
            
        }
    }

module.exports = controller