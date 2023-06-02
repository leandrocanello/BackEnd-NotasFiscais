const notaentradaController = require('../controllers/notaentradaController');

module.exports = (app) => {
    app.get('/notaentrada', notaentradaController.getnotaentrada)
    app.post('/notaentrada', notaentradaController.postnotaentrada)
    app.delete('/notaentrada/:id', notaentradaController.deletenotaentrada)
    app.put('/notaentrada/:id', notaentradaController.putnotaentrada)
    app.patch('/notaentrada/:id', notaentradaController.patchnotaentrada)
}
