const db = require('../database/db')

const sql_get = 
            `select * from cliente`

const getcliente = async() =>{
    result = await db.query(sql_get)
    return await db.query(sql_get, [])  
}

const sql_insert = 
        `insert into cliente (fantasia,cnpj,razaosocial,idendereco,email)
        values ($1,$2,$3,$4,$5)
        `
const postcliente = async(params)=>{
    const {fantasia,cnpj,razaosocial,idendereco,email} = params 
    await db.query(sql_insert,[fantasia,cnpj,razaosocial,idendereco,email])
}

const sql_delete = 
        `delete from cliente where cliente.idcliente = $1`

const deletecliente = async(params)=>{
    const {id} = params 
    await db.query(sql_delete,[id])
}

const sql_put =
                `update cliente
                    set franquia = $2,
                    cnpj = $3,
                    razaosocial = $4,
                    idendereco = $5,
                    email = $6
                where idcliente = $1
                `
const putcliente = async(params)=>{
    const {idcliente,franquia,cnpj,razaosocial,idendereco,email} = params 
    await db.query(sql_put,[idcliente,franquia,cnpj,razaosocial,idendereco,email])
}          


const sql_patch = 
        `update cliente
        set `
const patchcliente = async(params)=>{
    let field =  ''
    let binds = []
    binds.push(params.id)
    let countParams = 0
    if(params.fantasia){
        countParams = 2
        field +=  `fantasia = $${countParams}`
        binds.push(params.fantasia)
    }
    if(params.cnpj){
        countParams += 1
        field += (field?',':'') +`cnpj = $${countParams}`
        binds.push(params.cnpj)
    }
    if(params.razaosocial){
        countParams += 1
        field += (field?',':'') +`razaosocial = $${countParams}`
        binds.push(params.razaosocial)
    }
    if(params.idendereco){
        countParams += 1
        field += (field?',':'') +`idendereco = $${countParams}`
        binds.push(params.idendereco)
    }
    if(params.email){
        countParams += 1
        field += (field?',':'') +`email = $${countParams}`
        binds.push(params.email)
    }


    let sql = sql_patch + field + ` where idcliente = $1`
    console.log(sql)
    console.log(binds)
    return await db.query(sql, binds)
}

module.exports.putcliente = putcliente
module.exports.patchcliente = patchcliente 
module.exports.postcliente = postcliente
module.exports.getcliente = getcliente
module.exports.deletecliente = deletecliente