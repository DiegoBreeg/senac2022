const { Router } = require('express');
const path = require('path');
const controller = require('../controller/controller')

const routes = Router();


routes.get('/', controller.home)

routes.get('/script', controller.script)

routes.post('/', controller.post)

module.exports = routes