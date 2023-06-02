const select = require('../services/notaentradaServices')

const postnotaentrada = async (req,res,next) =>{
    try{
        await select.postnotaentrada(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}                                                                                                                                                                                   

const getnotaentrada = async(req,res,next) => {
    await select.getnotaentrada()
        .then(ret => res.status(201).send(ret.rows))
        .catch(err => res.status(500).send(err)) 
}

const deletenotaentrada = async(req,res,next) => {
    await select.deletenotaentrada(req.params)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err)) 
}

const putnotaentrada = async(req,res,next)=>{
    let params = req.body
    params.id = req.params.id
    await select.putnotaentrada(params)
    .then(ret => res.status(201).send(ret))
    .catch(err => res.status(500).send(err))
}


const patchnotaentrada = async(req,res,next)=>{
    let params = req.body
    params.id = req.params.id
    await select.patchnotaentrada(params)
    .then(ret => res.status(201).send(ret))
    .catch(err => res.status(500).send(err))
}

module.exports.postnotaentrada = postnotaentrada
module.exports.getnotaentrada = getnotaentrada
module.exports.deletenotaentrada = deletenotaentrada
module.exports.patchnotaentrada = patchnotaentrada
module.exports.putnotaentrada = putnotaentrada