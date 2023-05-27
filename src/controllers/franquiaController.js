const select = require('../services/franquiaServices')

const postfranquia = async (req,res,next) =>{
    try{
        await select.postfranquia(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}                                                                                                                                                                                   

const getfranquia = async(req,res,next) => {
    await select.getfranquia()
        .then(ret => res.status(201).send(ret.rows))
        .catch(err => res.status(500).send(err)) 
}

const deletefranquia = async(req,res,next) => {
    await select.deletefranquia(req.params)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err)) 
}

const putfranquia = async(req,res,next)=>{
    let params = req.body
    params.id = req.params.id
    await select.putfranquia(params)
    .then(ret => res.status(201).send(ret))
    .catch(err => res.status(500).send(err))
}


const patchfranquia = async(req,res,next)=>{
    let params = req.body
    params.id = req.params.id
    await select.patchfranquia(params)
    .then(ret => res.status(201).send(ret))
    .catch(err => res.status(500).send(err))
}

module.exports.postfranquia = postfranquia
module.exports.getfranquia = getfranquia
module.exports.deletefranquia = deletefranquia
module.exports.patchfranquia = patchfranquia
module.exports.putfranquia = putfranquia