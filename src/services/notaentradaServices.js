const db = require('../database/db')

const sql_get = 
            `select * from notaentrada`

const getnotaentrada = async() =>{
    result = await db.query(sql_get)
    return await db.query(sql_get, [])  
}

const sql_insert = 
            `insert into notaentrada(idestadonota,numeronf,valortotal,dataemisao,idfornecedor)
            values ($1, $2, $3, $4, $5)`

const postnotaentrada = async(params)=>{
    const {idestadonota,numeronf,valortotal,dataemisao,idfornecedor} = params 
    await db.query(sql_insert,[idestadonota,numeronf,valortotal,dataemisao,idfornecedor])
}

const sql_delete = 
        `delete from notaentrada where notaentrada.identrada = $1`

const deletenotaentrada = async(params)=>{
    const {id} = params 
    await db.query(sql_delete,[id])
}

const sql_put =
        `update notaentrada
            set idestadonota = $2,
                numeronf = $3,
                valortotal = $4,
                dataemisao = $5,
                idfornecedor = $6
            where identrada = $1
        `
const putnotaentrada = async(params)=>{
    const {idestadonota,numeronf,valortotal,dataemisao,idfornecedor} = params 
    await db.query(sql_put,[idestadonota,numeronf,valortotal,dataemisao,idfornecedor])
}          

const sql_patch = 
        `update notaentrada
        set `
const patchnotaentrada = async(params)=>{
    let field =  ''
    let binds = []
    binds.push(params.id)
    let countParams = 0
    if(params.idestadonota){
        countParams = 2
        field +=  `idestadonota = $${countParams}`
        binds.push(params.idestadonota)
    }
    if(params.numeronf){
        countParams += 1
        field += (field?',':'') +`numeronf = $${countParams}`
        binds.push(params.numeronf)
    }
    if(params.valortotal){
        countParams += 1
        field += (field?',':'') +`valortotal = $${countParams}`
        binds.push(params.valortotal)
    }
    if(params.dataemisao){
        countParams += 1
        field += (field?',':'') +`dataemisao = $${countParams}`
        binds.push(params.dataemisao)
    }
    if(params.idfornecedor){
        countParams += 1
        field += (field?',':'') +`idfornecedor = $${countParams}`
        binds.push(params.idfornecedor)
    }

    let sql = sql_patch + field + ` where identrada = $1`
    console.log(sql)
    console.log(binds)
    return await db.query(sql, binds)
}

module.exports.putnotaentrada = putnotaentrada
module.exports.patchnotaentrada = patchnotaentrada 
module.exports.postnotaentrada = postnotaentrada
module.exports.getnotaentrada = getnotaentrada
module.exports.deletenotaentrada = deletenotaentrada