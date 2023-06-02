const select = require('../services/estadonotaServices')

const postestadonota = async (req,res,next) =>{
    try{
        await select.postestadonota(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}                                                                                                                                                                                   

const getestadonota = async(req,res,next) => {
    await select.getestadonota()
        .then(ret => res.status(201).send(ret.rows))
        .catch(err => res.status(500).send(err)) 
}

const deleteestadonota = async(req,res,next) => {
    await select.deleteestadonota(req.params)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err)) 
}

const putestadonota = async(req,res,next)=>{
    let params = req.body
    params.id = req.params.id
    await select.putestadonota(params)
    .then(ret => res.status(201).send(ret))
    .catch(err => res.status(500).send(err))
}


const patchestadonota = async(req,res,next)=>{
    let params = req.body
    params.id = req.params.id
    await select.patchestadonota(params)
    .then(ret => res.status(201).send(ret))
    .catch(err => res.status(500).send(err))
}

module.exports.postestadonota = postestadonota
module.exports.getestadonota = getestadonota
module.exports.deleteestadonota = deleteestadonota
module.exports.patchestadonota = patchestadonota
module.exports.putestadonota = putestadonota