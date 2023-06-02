const usuario = require('./userRouter');
const cliente = require('./clienteRouter')
const franquia = require('./franquiaRouter')
const endereco = require('./enderecoRouter')
const estadonota = require('./estadonotaRouter')
const produto = require('./produtoRouter')
const notaentrada = require('./notaentradaRouter')
const notasaida = require('./notasaidaRouter')

module.exports = (app) => {
    usuario(app)
    cliente(app)
    franquia(app)
    endereco(app)
    estadonota(app)
    produto(app)
    notaentrada(app)
    notasaida(app)
}