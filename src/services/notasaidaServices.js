const db = require('../database/db')

const sql_get = 
            `select * from notasaida`

const getnotasaida = async() =>{
    result = await db.query(sql_get)
    return await db.query(sql_get, [])  
}

const sql_insert = 
            `insert into notasaida(idestadonota,numeronf,valortotal,dataemisao,idcliente)
            values ($1, $2, $3, $4, $5)`

const postnotasaida = async(params)=>{
    const {idestadonota,numeronf,valortotal,dataemisao,idcliente} = params 
    await db.query(sql_insert,[idestadonota,numeronf,valortotal,dataemisao,idcliente])
}

const sql_delete = 
        `delete from notasaida where notasaida.idsaida = $1`

const deletenotasaida = async(params)=>{
    const {id} = params 
    await db.query(sql_delete,[id])
}

const sql_put =
        `update notasaida
            set idestadonota = $2,
                numeronf = $3,
                valortotal = $4,
                dataemisao = $5,
                idcliente = $6
            where idsaida = $1
        `
const putnotasaida = async(params)=>{
    const {idestadonota,numeronf,valortotal,dataemisao,idcliente} = params 
    await db.query(sql_put,[idestadonota,numeronf,valortotal,dataemisao,idcliente])
}          


const sql_patch = 
        `update notasaida
        set `
const patchnotasaida = async(params)=>{
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
    if(params.idcliente){
        countParams += 1
        field += (field?',':'') +`idcliente = $${countParams}`
        binds.push(params.idcliente)
    }

    let sql = sql_patch + field + ` where idsaida = $1`
    console.log(sql)
    console.log(binds)
    return await db.query(sql, binds)
}

module.exports.putnotasaida = putnotasaida
module.exports.patchnotasaida = patchnotasaida 
module.exports.postnotasaida = postnotasaida
module.exports.getnotasaida = getnotasaida
module.exports.deletenotasaida = deletenotasaida