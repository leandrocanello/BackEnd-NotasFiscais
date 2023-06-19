const franquiaController = require('../controllers/franquiaController');

module.exports = (app) => {
    app.get('/franquia', franquiaController.getfranquia
        /* #swagger.tags = ['Franquia']
       #swagger.summary = 'Busca lista de Franquia'  
         #swagger.responses[201] = { description: 'Sucesso!',
      schema: {
           "total":1, 
           "Franquia":[
            {
            idendereco: 1,
            idcliente: 1,
            numero: 1,
            cnpj: "85.071.272/0001-35",
            email: "cabeceirasdesol@gmail.com",
            fantasia: "Cabeceiras de Sol",
          }
        ]
      }
    }
    */)
    app.post('/franquia', franquiaController.postfranquia
        /* #swagger.tags = ['Franquia']
       #swagger.summary = 'Insere Franquia'         
        #swagger.parameters['json'] = {
         in: 'body',
         description: 'Dados para inserir uma Franquia',
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
    app.delete('/franquia/:id', franquiaController.deletefranquia
        /* #swagger.tags = ['Franquia']
       #swagger.summary = 'Deleta uma Franquia, de acordo com o id pasado por parametro'         
    */)
    app.put('/franquia/:id', franquiaController.putfranquia
        /* #swagger.tags = ['Franquia']
       #swagger.summary = 'Atualiza o registro desejdo de uma Franquia, de acordo com o id passado por parametro'         
       #swagger.parameters['json'] = {
        in: 'body',
        description: 'Dados que podem ser passados para atualizar totalmente uma Franquia na resposta',
        required: 'true',
        type: 'json',
        schema: {
            numero: 1,
            cnpj: "85.071.272/0001-35",
            email: "cabeceirasdesol@gmail.com",
            fantasia: "Cabeceiras de Sol",
        }
    }   
       */)
    app.patch('/franquia/:id', franquiaController.patchfranquia
        /* #swagger.tags = ['Franquia']
       #swagger.summary = 'Atualiza todo registro de uma Franquia, de acordo com o id passado por parametro'         
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
            email: "cabeceirasdesol@gmail.com",
            fantasia: "Cabeceiras de Sol",
        }
    }
       */)
}
