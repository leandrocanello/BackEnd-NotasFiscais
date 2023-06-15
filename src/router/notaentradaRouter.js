const notaentradaController = require('../controllers/notaentradaController');

module.exports = (app) => {
    app.get('/notaentrada', notaentradaController.getnotaentrada
            /* #swagger.tags = ['Nota de Entrada']
       #swagger.summary = 'Busca lista de Nota de Entrada'         
    */)
    app.post('/notaentrada', notaentradaController.postnotaentrada
            /* #swagger.tags = ['Nota de Entrada']
       #swagger.summary = 'Insere Nota de Entrada'         
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
            idfornecedor: 1
         }
       }       
    */)
    app.delete('/notaentrada/:id', notaentradaController.deletenotaentrada
            /* #swagger.tags = ['Nota de Entrada']
       #swagger.summary = 'Deleta uma Nota de Entrada, de acordo com o id pasado por parametro'         
    */)
    app.put('/notaentrada/:id', notaentradaController.putnotaentrada
            /* #swagger.tags = ['Nota de Entrada']
       #swagger.summary = 'Atualiza o registro desejdo de uma Nota de Entrada, de acordo com o id passado por parametro'         
    */)
    app.patch('/notaentrada/:id', notaentradaController.patchnotaentrada
            /* #swagger.tags = ['Nota de Entrada']
       #swagger.summary = 'Atualiza todo registro de uma Nota de Entrada, de acordo com o id passado por parametro'         
    */)
}
