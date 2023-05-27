const db = require('../database/db')

const sql_get = 
            `select * from revenda`

const getfranquia = async() =>{
    result = await db.query(sql_get)
    return await db.query(sql_get, [])  
}

const sql_insert = 
            `insert into revenda(idendereco,idcliente,numero,cnpj,email,fantasia)
            values (idendereco,idcliente,numero,cnpj,email,fantasia)`

const postfranquia = async(params)=>{
    const {idendereco,idcliente,numero,cnpj,email,fantasia} = params 
    await db.query(sql_insert,[idendereco,idcliente,numero,cnpj,email,fantasia])
}

const sql_delete = 
        `delete from revenda where revenda.idrevenda = $1`

const deletefranquia = async(params)=>{
    const {id} = params 
    await db.query(sql_delete,[id])
}

const sql_put =
        `update revenda
            set idendereco = $2,
                idcliente = $3,
                numero = $4,
                cnpj = $5,
                email = $6,
                fantasia = $7
            where idrevenda = $1
        `
const putfranquia = async(params)=>{
    const {idendereco,idcliente,numero,cnpj,email,fantasia} = params 
    await db.query(sql_put,[idendereco,idcliente,numero,cnpj,email,fantasia])
}          


const sql_patch = 
        `update revenda
        set `
const patchfranquia = async(params)=>{
    let field =  ''
    let binds = []
    binds.push(params.id)
    let countParams = 0
    if(params.idendereco){
        countParams = 2
        field +=  `idendereco = $${countParams}`
        binds.push(params.idendereco)
    }
    if(params.idcliente){
        countParams += 1
        field += (field?',':'') +`idcliente = $${countParams}`
        binds.push(params.idcliente)
    }
    if(params.numero){
        countParams += 1
        field += (field?',':'') +`numero = $${countParams}`
        binds.push(params.numero)
    }
    if(params.cnpj){
        countParams += 1
        field += (field?',':'') +`cnpj = $${countParams}`
        binds.push(params.cnpj)
    }
    if(params.email){
        countParams += 1
        field += (field?',':'') +`email = $${countParams}`
        binds.push(params.email)
    }
    if(params.fantasia){
        countParams += 1
        field += (field?',':'') +`fantasia = $${countParams}`
        binds.push(params.fantasia)
    }

    let sql = sql_patch + field + ` where idfranquia = $1`
    console.log(sql)
    console.log(binds)
    return await db.query(sql, binds)
}

module.exports.putfranquia = putfranquia
module.exports.patchfranquia = patchfranquia 
module.exports.postfranquia = postfranquia
module.exports.getfranquia = getfranquia
module.exports.deletefranquia = deletefranquia