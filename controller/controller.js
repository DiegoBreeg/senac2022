const path = require('path');

const controller =

    {
        home: function home(req, res) {            
            
            console.log(`[server]: ${req.method}`, path.resolve() + '/layout_for_query/home.html')
            return res.status(200).sendFile('/home/dviego/dev/senac2022/viwer/layout_for_query/home.html')
        },
        script: function script(req, res) {                 
        
            console.log(`[server]: ${req.method} /viwer/index.js`)        
            return res.status(200).sendFile(path.resolve() + '/viwer/index.js')
        }, 
        post: function post(req, res) {  

            console.log(`[server]: ${req.method} root (/) `)            
            console.log(JSON.stringify(req.body))
            console.log('\n')
            return res.status(200).sendFile(path.resolve() + '/viwer/form/sucesso.html')
            
        }
    }

module.exports = controller