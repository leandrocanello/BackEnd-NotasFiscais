const select = require('../database/select')

const postusuario = async (req,res,next) =>{
    try{
        await select.postusuario(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const getusuario = async(req,res,next) => {
    await select.getusuario()
        .then(ret => res.status(201).send(ret.rows))
        .catch(err => res.status(500).send(err)) 
}

const deleteusuario = async(req,res,next) => {
    await select.deleteusuario(req.params)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err)) 
}

const putusuario = async(req,res,next)=>{
    let params = req.body
    params.id = req.params.id
    await select.putusuario(params)
    .then(ret => res.status(201).send(ret))
    .catch(err => res.status(500).send(err))
}


const patchusuario = async(req,res,next)=>{
    let params = req.body
    params.id = req.params.id
    await select.patchusuario(params)
    .then(ret => res.status(201).send(ret))
    .catch(err => res.status(500).send(err))
}

module.exports.postusuario = postusuario
module.exports.getusuario = getusuario
module.exports.deleteusuario = deleteusuario
module.exports.patchusuario = patchusuario
module.exports.putusuario = putusuario