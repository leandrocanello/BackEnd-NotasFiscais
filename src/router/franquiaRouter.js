const franquiaController = require('../controllers/franquiaController');

module.exports = (app) => {
    app.get('/franquia', franquiaController.getfranquia)
    app.post('/franquia', franquiaController.postfranquia)
    app.delete('/franquia/:id', franquiaController.deletefranquia)
    app.put('/franquia/:id', franquiaController.putfranquia)
    app.patch('/franquia/:id', franquiaController.patchfranquia)
}
