const produtoController = require('../controllers/produtoController');

module.exports = (app) => {
    app.get('/produto', produtoController.getproduto)
    app.post('/produto', produtoController.postproduto)
    app.delete('/produto/:id', produtoController.deleteproduto)
    app.put('/produto/:id', produtoController.putproduto)
    app.patch('/produto/:id', produtoController.patchproduto)
}
