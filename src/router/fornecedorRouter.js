const fornecedorController = require('../controllers/fornecedorController');

module.exports = (app) => {
    app.get('/fornecedor', fornecedorController.getfornecedor)
    app.post('/fornecedor', fornecedorController.postfornecedor)
    app.delete('/fornecedor/:id', fornecedorController.deletefornecedor)
    app.put('/fornecedor/:id', fornecedorController.putfornecedor)
    app.patch('/fornecedor/:id', fornecedorController.patchfornecedor)
}
