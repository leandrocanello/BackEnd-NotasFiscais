const estadonotaController = require('../controllers/estadonotaController');

module.exports = (app) => {
    app.get('/estadonota', estadonotaController.getestadonota
            /* #swagger.tags = ['Nota por estado']
       #swagger.summary = 'Busca lista de Nota po estado'         
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
            estad0: "Paraná",
            uf: "PR"
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
    */)
    app.patch('/estadonota/:id', estadonotaController.patchestadonota
                /* #swagger.tags = ['Nota por estado']
       #swagger.summary = 'Atualiza todo registro de uma Nota por estado, de acordo com o id passado por parametro'         
    */)
}
