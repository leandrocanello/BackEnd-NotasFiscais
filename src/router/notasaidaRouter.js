const notasaidaController = require('../controllers/notasaidaController');

module.exports = (app) => {
    app.get('/notasaida', notasaidaController.getnotasaida)
    app.post('/notasaida', notasaidaController.postnotasaida)
    app.delete('/notasaida/:id', notasaidaController.deletenotasaida)
    app.put('/notasaida/:id', notasaidaController.putnotasaida)
    app.patch('/notasaida/:id', notasaidaController.patchnotasaida)
}
