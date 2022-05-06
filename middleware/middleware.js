const routes = require('../routes/routes')

function middleware(app) {

app.use(routes)

}


module.exports = middleware