const usuario = require('./userRouter');
const cliente = require('./clienteRouter')
const franquia = require('./franquiaRouter')
const endereco = require('./enderecoRouter')

module.exports = (app) => {
    usuario(app)
    cliente(app)
    franquia(app)
    endereco(app)
}