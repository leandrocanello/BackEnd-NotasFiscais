const select = require('../services/notasaidaServices')

const postnotasaida = async (req,res,next) =>{
    try{
        await select.postnotasaida(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}                                                                                                                                                                                   

const getnotasaida = async(req,res,next) => {
    await select.getnotasaida()
        .then(ret => res.status(201).send(ret.rows))
        .catch(err => res.status(500).send(err)) 
}

const deletenotasaida = async(req,res,next) => {
    await select.deletenotasaida(req.params)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err)) 
}

const putnotasaida = async(req,res,next)=>{
    let params = req.body
    params.id = req.params.id
    await select.putnotasaida(params)
    .then(ret => res.status(201).send(ret))
    .catch(err => res.status(500).send(err))
}


const patchnotasaida = async(req,res,next)=>{
    let params = req.body
    params.id = req.params.id
    await select.patchnotasaida(params)
    .then(ret => res.status(201).send(ret))
    .catch(err => res.status(500).send(err))
}

module.exports.postnotasaida = postnotasaida
module.exports.getnotasaida = getnotasaida
module.exports.deletenotasaida = deletenotasaida
module.exports.patchnotasaida = patchnotasaida
module.exports.putnotasaida = putnotasaida