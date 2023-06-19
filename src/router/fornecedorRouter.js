const fornecedorController = require('../controllers/fornecedorController');

module.exports = (app) => {
    app.get('/fornecedor', fornecedorController.getfornecedor
            /* #swagger.tags = ['Fornecedor']
       #swagger.summary = 'Busca lista de Fornecedor' 
       #swagger.responses[201] = { description: 'Sucesso!',
      schema: {
           "total":1, 
           "Fornecedor":[
            {
            idendereco: 1,
            idcliente: 1,
            numero: 1,
            cnpj: "85.071.272/0001-35",
            email: "VendeMoveis@gmail.com",
            fantasia: "Vendedor Ambulante",
          }
        ]
      }
    }   
    */)
    app.post('/fornecedor', fornecedorController.postfornecedor
            /* #swagger.tags = ['Fornecedor']
       #swagger.summary = 'Insere Fornecedor'
         #swagger.parameters['json'] = {
         in: 'body',
         description: 'Dados para inserir um Fornecedor',
         required: 'true',
         type: 'json',
         schema:{
            idendereco: 1,
            idcliente: 1,
            numero: 1,
            cnpj: "00000-00/00",
            email: "exemploemail@gmail.com",
            fantasia: "EXEMPLO",
         }
       }          
    */)
    app.delete('/fornecedor/:id', fornecedorController.deletefornecedor
                /* #swagger.tags = ['Fornecedor']
       #swagger.summary = 'Deleta um Fornecedor, de acordo com o id pasado por parametro'         
    */)
    app.put('/fornecedor/:id', fornecedorController.putfornecedor
                /* #swagger.tags = ['Fornecedor']
       #swagger.summary = 'Atualiza o registro desejdo de um Fornecedor, de acordo com o id passado por parametro'         
       #swagger.parameters['json'] = {
        in: 'body',
        description: 'Dados que podem ser passados para atualizar totalmente um Fornecedor na resposta',
        required: 'true',
        type: 'json',
        schema: {
            numero: 1,
            cnpj: "85.071.272/0001-35",
            email: "VendeMoveis@gmail.com",
            fantasia: "Vendedor Ambulante",
        }
    }
       */)
    app.patch('/fornecedor/:id', fornecedorController.patchfornecedor
                /* #swagger.tags = ['Fornecedor']
       #swagger.summary = 'Atualiza todo registro de um Fornecedor, de acordo com o id passado por parametro'         
       #swagger.parameters['json'] = {
        in: 'body',
        description: 'Dados que podem ser passados para atualizar um Fornecedor na resposta',
        required: 'true',
        type: 'json',
        schema: {
            idendereco: 1,
            idcliente: 1,
            numero: 1,
            cnpj: "85.071.272/0001-35",
            email: "VendeMoveis@gmail.com",
            fantasia: "Vendedor Ambulante",
        }
      }
       */)
}
