const enderecoController = require('../controllers/enderecoController');

module.exports = (app) => {
    app.get('/endereco', enderecoController.getendereco)
    app.post('/endereco', enderecoController.postendereco)
    app.delete('/endereco/:id', enderecoController.deleteendereco)
    app.put('/endereco/:id', enderecoController.putendereco)
    app.patch('/endereco/:id', enderecoController.patchendereco)
}   
