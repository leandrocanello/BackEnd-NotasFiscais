const swaggerAutogen = require('swagger-autogen')('pt-BR')
const doc= {
    info:{
        version: "1.0.0",
        title: "API FINANCEIRO",
        description: "DOCUMENTAÇÃO DA API FINANCEIRA"
    },
    host: `localhost:3000`,
    basePath: "",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    
}   
 
const outputFile = './src/docs/swagger.yaml'
const endPointsFile = ['./src/router/userRouter.js', './src/router/produtoRouter.js',
'./src/router/franquiaRouter.js','./src/router/notasaidaRouter.js','./src/router/notaentradaRouter.js',
'./src/router/fornecedorRouter.js','./src/router/estadonotaRouter.js','./src/router/enderecoRouter.js',
'./src/router/clienteRouter.js'
]

swaggerAutogen(outputFile,endPointsFile,doc)
