const express = require('express'),
      router = express.Router()

const fibonacciController = require('../controllers/fibonacciController')

module.exports = () =>{
    
    router.get('/api-fibonacci/obtener-index/:n', fibonacciController.obtenerIndex)

    return router
}
