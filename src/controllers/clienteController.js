const clienteServices = require('../services/clienteServices.js')

const postcliente = async (req,res,next) =>{
    try{
        await clienteServices.postcliente(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}                                                                                                                                                                                   

const getcliente = async(req,res,next) => {
    await clienteServices.getcliente()
        .then(ret => res.status(201).send(ret.rows))
        .catch(err => res.status(500).send(err)) 
}

const deletecliente = async(req,res,next) => {
    await clienteServices.deletecliente(req.params)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err)) 
}

const putcliente = async(req,res,next)=>{
    let params = req.body
    params.id = req.params.id
    await clienteServices.putcliente(params)
    .then(ret => res.status(201).send(ret))
    .catch(err => res.status(500).send(err))
}


const patchcliente = async(req,res,next)=>{
    let params = req.body
    params.id = req.params.id
    await clienteServices.patchcliente(params)
    .then(ret => res.status(201).send(ret))
    .catch(err => res.status(500).send(err))
}

module.exports.postcliente = postcliente
module.exports.getcliente = getcliente
module.exports.deletecliente = deletecliente
module.exports.patchcliente = patchcliente
module.exports.putcliente = putcliente