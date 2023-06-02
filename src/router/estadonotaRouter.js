const estadonotaController = require('../controllers/estadonotaController');

module.exports = (app) => {
    app.get('/estadonota', estadonotaController.getestadonota)
    app.post('/estadonota', estadonotaController.postestadonota)
    app.delete('/estadonota/:id', estadonotaController.deleteestadonota)
    app.put('/estadonota/:id', estadonotaController.putestadonota)
    app.patch('/estadonota/:id', estadonotaController.patchestadonota)
}
