const usuario = require('./userRouter');
const cliente = require('./clienteRouter')

module.exports = (app) => {
    usuario(app)
    cliente(app)
}