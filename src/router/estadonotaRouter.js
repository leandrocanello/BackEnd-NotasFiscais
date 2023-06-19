const estadonotaController = require('../controllers/estadonotaController');

module.exports = (app) => {
    app.get('/estadonota', estadonotaController.getestadonota
            /* #swagger.tags = ['Nota por estado']
       #swagger.summary = 'Busca lista de Nota po estado'      
       #swagger.responses[201] = { description: 'Sucesso!',
      schema: 
          {
           "total":1, 
           "Nota Estado":[
            {
            numeronota: 12345,
            estado: "Paraná",
            UF: "PR"
          }
        ]
      }
    }     
    */)
    app.post('/estadonota', estadonotaController.postestadonota
            /* #swagger.tags = ['Nota por estado']
       #swagger.summary = 'Insere Nota por estado'   
       #swagger.parameters['json'] = {
         in: 'body',
         description: 'Dados para inserir uma nota por estado',
         required: 'true',
         type: 'json',
         schema:{
            numeronota: 00000,
            estado: "Paraná",
            UF: "PR"
         }
       }      
    */)
    app.delete('/estadonota/:id', estadonotaController.deleteestadonota
                /* #swagger.tags = ['Nota por estado']
       #swagger.summary = 'Deleta uma Nota por estado, de acordo com o id pasado por parametro'         
    */)
    app.put('/estadonota/:id', estadonotaController.putestadonota
                /* #swagger.tags = ['Nota por estado']
          #swagger.summary = 'Atualiza o registro desejdo de uma Nota por estado, de acordo com o id passado por parametro'         
          #swagger.parameters['json'] = {
        in: 'body',
        description: 'Dados que podem ser passados para atualizar totalmente uma Nota do Estado na resposta',
        required: 'true',
        type: 'json',
        schema: {
            numeronota: 12345,
            estado: "Paraná",
            UF: "PR"
        }
    }
       */)
    app.patch('/estadonota/:id', estadonotaController.patchestadonota
                /* #swagger.tags = ['Nota por estado']
       #swagger.summary = 'Atualiza todo registro de uma Nota por estado, de acordo com o id passado por parametro'         
       #swagger.parameters['json'] = {
        in: 'body',
        description: 'Dados que podem ser passados para atualizar totalmente uma Nota de Estado na resposta',
        required: 'true',
        type: 'json',
        schema: {
            numeronota: 12345,
            estado: "Paraná",
            UF: "PR"
        }
        }
       */)
}
