const userController = require('../controllers/userController');

module.exports = (app) => {
    app.get('/usuario', userController.getusuario
            /* #swagger.tags = ['Usuario']
       #swagger.summary = 'Busca lista de Usuario' 
       #swagger.responses[201] = { description: 'Sucesso!',
      schema: 
          {
           "total":1, 
           "Usuario":[
            {
            usuario: "Amanda",
            senha: "Amanda123",
            sexo: "I",
            setor: "ADM"
          }
        ]
      }
    }          
    */)
    app.post('/usuario', userController.postusuario
            /* #swagger.tags = ['Usuario']
       #swagger.summary = 'Insere Usuario'  
         #swagger.parameters['json'] = {
         in: 'body',
         description: 'Dados para inserir um Usuario',
         required: 'true',
         type: 'json',
         schema:{
            usuario: "NOME",
            senha: "SENHA",
            sexo: "I",
            setor: "ADM"
         }
       }       
    */)
    app.delete('/usuario/:id', userController.deleteusuario
            /* #swagger.tags = ['Usuario']
       #swagger.summary = 'Deleta um Usuario, de acordo com o id pasado por parametro'         
    */)
    app.put('/usuario/:id', userController.putusuario
            /* #swagger.tags = ['Usuario']
       #swagger.summary = 'Atualiza o registro desejdo de um Usuario, de acordo com o id passado por parametro'         
       #swagger.parameters['json'] = {
        in: 'body',
        description: 'Dados que podem ser passados para atualizar totalmente um Usuario na resposta',
        required: 'true',
        type: 'json',
        schema: {
            usuario: "Amanda",
            senha: "Amanda123",
            sexo: "I",
            setor: "ADM"
        }
    }
       */)
    app.patch('/usuario/:id', userController.patchusuario
           /* #swagger.tags = ['Usuario']
       #swagger.summary = 'Atualiza todo registro de um Usuario, de acordo com o id passado por parametro'         
       #swagger.parameters['json'] = {
        in: 'body',
        description: 'Dados que podem ser passados para atualizar totalmente um Usuario na resposta',
        required: 'true',
        type: 'json',
        schema: {
            usuario: "Amanda",
            senha: "Amanda123",
            sexo: "I",
            setor: "ADM"
        }
        }
       */)
}
