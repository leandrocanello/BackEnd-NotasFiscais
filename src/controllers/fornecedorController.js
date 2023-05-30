const select = require('../services/fornecedorServices')

const postfornecedor = async (req,res,next) =>{
    try{
        await select.postfornecedor(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}                                                                                                                                                                                   

const getfornecedor = async(req,res,next) => {
    await select.getfornecedor()
        .then(ret => res.status(201).send(ret.rows))
        .catch(err => res.status(500).send(err)) 
}

const deletefornecedor = async(req,res,next) => {
    await select.deletefornecedor(req.params)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err)) 
}

const putfornecedor = async(req,res,next)=>{
    let params = req.body
    params.id = req.params.id
    await select.putfornecedor(params)
    .then(ret => res.status(201).send(ret))
    .catch(err => res.status(500).send(err))
}


const patchfornecedor = async(req,res,next)=>{
    let params = req.body
    params.id = req.params.id
    await select.patchfornecedor(params)
    .then(ret => res.status(201).send(ret))
    .catch(err => res.status(500).send(err))
}

module.exports.postfornecedor = postfornecedor
module.exports.getfornecedor = getfornecedor
module.exports.deletefornecedor = deletefornecedor
module.exports.patchfornecedor = patchfornecedor
module.exports.putfornecedor = putfornecedor