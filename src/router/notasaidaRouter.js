const notasaidaController = require('../controllers/notasaidaController');

module.exports = (app) => {
    app.get('/notasaida', notasaidaController.getnotasaida
            /* #swagger.tags = ['Nota de Saida']
       #swagger.summary = 'Busca lista de Nota de Saida'  
       #swagger.responses[201] = { description: 'Sucesso!',
      schema: {
           "total":1, 
           "Nota Saida":[
            {
            idestadonota: 1,
            numeronf: "122983765",
            valortotal: 200,
            dataemisao: "12.02.2022",
            idcliente: 1
          }
        ]
      }
    }       
    */)
    app.post('/notasaida', notasaidaController.postnotasaida
            /* #swagger.tags = ['Nota de Saida']
       #swagger.summary = 'Insere Nota de Saida'         
        #swagger.parameters['json'] = {
        in: 'body',
        description: 'Dados para inserir um Endereço',
        required: 'true',
        type: 'json',
        schema:{
            idestadonota: 1,
            numeronf: "122983765",
            valortotal: 200,
            dataemisao: "12.02.2022",
            idcliente: 1
         }
       }   
    */)
    app.delete('/notasaida/:id', notasaidaController.deletenotasaida
            /* #swagger.tags = ['Nota de Saida']
       #swagger.summary = 'Deleta uma Nota de Saida, de acordo com o id pasado por parametro'         
    */)
    app.put('/notasaida/:id', notasaidaController.putnotasaida
            /* #swagger.tags = ['Nota de Saida']
       #swagger.summary = 'Atualiza o registro desejdo de uma Nota de Saida, de acordo com o id passado por parametro'         
       #swagger.parameters['json'] = {
        in: 'body',
        description: 'Dados que podem ser passados para atualizar totalmente uma Nota de Saida na resposta',
        required: 'true',
        type: 'json',
        schema: {
            numeronf: "122983765",
            valortotal: 200,
            dataemisao: "12.02.2023",
        }
    } 
       */)
    app.patch('/notasaida/:id', notasaidaController.patchnotasaida
            /* #swagger.tags = ['Nota de Saida']
       #swagger.summary = 'Atualiza todo registro de uma Nota de Saida, de acordo com o id passado por parametro'         
       #swagger.parameters['json'] = {
        in: 'body',
        description: 'Dados que podem ser passados para atualizar uma Nota de Saida na resposta',
        required: 'true',
        type: 'json',
        schema: {
            idestadonota: 1,
            numeronf: "122983765",
            valortotal: 200,
            dataemisao: "12.02.2022",
            idcliente: 1
        }
      }
       */)
}
