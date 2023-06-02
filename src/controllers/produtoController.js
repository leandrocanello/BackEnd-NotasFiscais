const select = require('../services/produtoServices')

const postproduto = async (req,res,next) =>{
    try{
        await select.postproduto(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}                                                                                                                                                                                   

const getproduto = async(req,res,next) => {
    await select.getproduto()
        .then(ret => res.status(201).send(ret.rows))
        .catch(err => res.status(500).send(err)) 
}

const deleteproduto = async(req,res,next) => {
    await select.deleteproduto(req.params)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err)) 
}

const putproduto = async(req,res,next)=>{
    let params = req.body
    params.id = req.params.id
    await select.putproduto(params)
    .then(ret => res.status(201).send(ret))
    .catch(err => res.status(500).send(err))
}


const patchproduto = async(req,res,next)=>{
    let params = req.body
    params.id = req.params.id
    await select.patchproduto(params)
    .then(ret => res.status(201).send(ret))
    .catch(err => res.status(500).send(err))
}

module.exports.postproduto = postproduto
module.exports.getproduto = getproduto
module.exports.deleteproduto = deleteproduto
module.exports.patchproduto = patchproduto
module.exports.putproduto = putproduto