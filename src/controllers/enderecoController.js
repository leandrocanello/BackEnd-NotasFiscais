const enderecoServices = require('../services/enderecoServices.js')

const postendereco = async (req,res,next) =>{
    try{
        await enderecoServices.postendereco(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}                                                                                                                                                                                   

const getendereco = async(req,res,next) => {
    await enderecoServices.getendereco()
        .then(ret => res.status(201).send(ret.rows))
        .catch(err => res.status(500).send(err)) 
}

const deleteendereco = async(req,res,next) => {
    await enderecoServices.deleteendereco(req.params)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err)) 
}

const putendereco = async(req,res,next)=>{
    let params = req.body
    params.id = req.params.id
    await enderecoServices.putendereco(params)
    .then(ret => res.status(201).send(ret))
    .catch(err => res.status(500).send(err))
}


const patchendereco = async(req,res,next)=>{
    let params = req.body
    params.id = req.params.id
    await enderecoServices.patchendereco(params)
    .then(ret => res.status(201).send(ret))
    .catch(err => res.status(500).send(err))
}

module.exports.postendereco = postendereco
module.exports.getendereco = getendereco
module.exports.deleteendereco = deleteendereco
module.exports.patchendereco = patchendereco
module.exports.putendereco = putendereco