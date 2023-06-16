const enderecoController = require('../controllers/enderecoController');

module.exports = (app) => {
    app.get('/endereco', enderecoController.getendereco
        /* #swagger.tags = ['Endereço']
       #swagger.summary = 'Busca lista de Endereço'       
        #swagger.responses[201] = { description: 'Sucesso!',
    schema: {
        "total": 1,
        "Usuario": [
          {
        "idendereco": 1,
        "rua": "Natal",
        "cidade": "Pinhalzinho",
        "cep": "89870-000",
        "bairro": "Centro",
        "uf": "SC"
          }
        ]
      }
    }     
    */)
    app.post('/endereco', enderecoController.postendereco
        /* #swagger.tags = ['Endereço']
       #swagger.summary = 'Insere Endereço'     
           #swagger.parameters['json'] = {
         in: 'body',
         description: 'Dados para inserir um Endereço',
         required: 'true',
         type: 'json',
         schema:{
            rua: "NATAL",
            cidade: "Pinhalzinho",
            cep: "89870-000",
            bairro: "CENTRO",
            uf: "SC"
         }
       }       
    */)
    app.delete('/endereco/:id', enderecoController.deleteendereco
        /* #swagger.tags = ['Endereço']
       #swagger.summary = 'Deleta um Endereço, de acordo com o id pasado por parametro'         
    */)
    app.put('/endereco/:id', enderecoController.putendereco
        /* #swagger.tags = ['Endereço']
       #swagger.summary = 'Atualiza o registro desejdo de um Endereço, de acordo com o id passado por parametro'         
    */)
    app.patch('/endereco/:id', enderecoController.patchendereco
        /* #swagger.tags = ['Endereço']
       #swagger.summary = 'Atualiza todo registro de um Endereço, de acordo com o id passado por parametro'         
    */)
}   
