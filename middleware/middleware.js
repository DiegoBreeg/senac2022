const express = require('express')
const routes = require('../routes/routes')

function middleware(app) {

app.use(express.static('viwer'))
app.use(routes)


}


module.exports = middleware