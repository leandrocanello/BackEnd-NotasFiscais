const clienteController = require('../controllers/clienteController');

module.exports = (app) => {
    app.get('/cliente', clienteController.getcliente)
    app.post('/cliente', clienteController.postcliente)
    app.delete('/cliente/:id', clienteController.deletecliente)
    app.put('/cliente/:id', clienteController.putcliente)
    app.patch('/cliente/:id', clienteController.patchcliente)
}
