const userController = require('../controllers/userController');

module.exports = (app) => {
    app.get('/usuario', userController.getusuario)
    app.post('/usuario', userController.postusuario)
    app.delete('/usuario/:id', userController.deleteusuario)
    app.put('/usuario/:id', userController.putusuario)
    app.patch('/usuario/:id', userController.patchusuario)
}
