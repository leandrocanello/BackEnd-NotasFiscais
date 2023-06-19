const clienteController = require('../controllers/clienteController');

module.exports = (app) => {
    app.get('/cliente', clienteController.getcliente
    /* #swagger.tags = ['Cliente']
       #swagger.summary = 'Busca lista de clietes'  
       #swagger.responses[201] = { description: 'Sucesso!',
      schema: 
          {
           "total":1, 
           "Cliente":[
            {
            fantasia: "Propretario",
            cnpj: "85.071.272/0001-35",
            razaosocial: "ProPretario",
            idendereco: 2,
            email: "propretario@gmail.com"
          }
        ]
      }
    }        
    */) 
    app.post('/cliente', clienteController.postcliente
    /* #swagger.tags = ['Cliente']
       #swagger.summary = 'Insere clietes'         
         #swagger.parameters['json'] = {
         in: 'body',
         description: 'Dados para inserir um Cliente',
         required: 'true',
         type: 'json',
         schema:{
            fantasia: "EXEMPLO",
            cnpj: "00000-00/00",
            razaosocial: "EXEMPLO",
            idendereco: 2,
            email: "exemploemail@gmail.com"
         }
       }
    */)
    app.delete('/cliente/:id', clienteController.deletecliente
        /* #swagger.tags = ['Cliente']
       #swagger.summary = 'Deleta um clietes, de acordo com o id pasado por parametro'         
    */)
    app.put('/cliente/:id', clienteController.putcliente
        /* #swagger.tags = ['Cliente']
       #swagger.summary = 'Atualiza o registro desejdo de um cliente, de acordo com o id passado por parametro'         
       #swagger.parameters['json'] = {
        in: 'body',
        description: 'Dados que podem ser passados para atualizar totalmente um Cliente na resposta',
        required: 'true',
        type: 'json',
        schema: {
            fantasia: "Propretario",
            cnpj: "85.071.272/0001-35",
            razaosocial: "ProPretario",
            idendereco: 2,
            email: "propretario@gmail.com"
        }
    }
       */)
    app.patch('/cliente/:id', clienteController.patchcliente
        /* #swagger.tags = ['Cliente']
       #swagger.summary = 'Atualiza todo registro de um cliente, de acordo com o id passado por parametro'         
       #swagger.parameters['json'] = {
        in: 'body',
        description: 'Dados que podem ser passados para atualizar totalmente um Cliente na resposta',
        required: 'true',
        type: 'json',
        schema: {
            fantasia: "Propretario",
            cnpj: "85.071.272/0001-35",
            razaosocial: "ProPretario",
            idendereco: 2,
            email: "propretario@gmail.com"
        }
        }
       */)
}
