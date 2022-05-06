const path = require('path');

const controller =

    {
        home: function home(req, res) {            
            
            console.log(`[server]: ${req.method} /viwer/index.html`)        
            return res.status(200).sendFile(path.resolve() + '/viwer/index.html')
        },
        script: function script(req, res) {                 
        
            console.log(`[server]: ${req.method} /viwer/index.js`)        
            return res.status(200).sendFile(path.resolve() + '/viwer/index.js')
        }, 
        post: function post(req, res) {  

            console.log(`[server]: ${req.method} root (/) `)
            console.log('\n')
            console.log(JSON.stringify(req.body))
            console.log('\n')
            return res.status(200)            
            
        }
    }

module.exports = controller