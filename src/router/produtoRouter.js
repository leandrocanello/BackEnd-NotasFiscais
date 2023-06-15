const produtoController = require('../controllers/produtoController');

module.exports = (app) => {
    app.get('/produto', produtoController.getproduto
            /* #swagger.tags = ['Produto']
       #swagger.summary = 'Busca lista de Produto'         
    */)
    app.post('/produto', produtoController.postproduto
            /* #swagger.tags = ['Produto']
       #swagger.summary = 'Insere Produto'         
        #swagger.parameters['json'] = {
         in: 'body',
         description: 'Dados para inserir um Produto',
         required: 'true',
         type: 'json',
         schema:{
            descricao: "EXEMPLO",
            cor: "AZUL",
            largura: 10,
            altura: 20,
            comprimento: 40
         }
       }  
    */)
    app.delete('/produto/:id', produtoController.deleteproduto
            /* #swagger.tags = ['Produto']
       #swagger.summary = 'Deleta um Produto, de acordo com o id pasado por parametro'         
    */)
    app.put('/produto/:id', produtoController.putproduto
            /* #swagger.tags = ['Produto']
       #swagger.summary = 'Atualiza o registro desejdo de um Produto, de acordo com o id passado por parametro'         
    */)
    app.patch('/produto/:id', produtoController.patchproduto
            /* #swagger.tags = ['Produto']
       #swagger.summary = 'Atualiza todo registro de um Produto, de acordo com o id passado por parametro'         
    */)
}
