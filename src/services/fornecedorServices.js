const db = require('../database/db')

const sql_get = 
            `select * from fornecedor`

const getfornecedor = async() =>{
    result = await db.query(sql_get)
    return await db.query(sql_get, [])  
}

const sql_insert = 
            `insert into fornecedor(fantasia,razaosocial,cnpj,materiaprima,email)
            values ($1, $2, $3, $4, $5)`

const postfornecedor = async(params)=>{
    const {fantasia,razaosocial,cnpj,materiaprima,email} = params 
    await db.query(sql_insert,[fantasia,razaosocial,cnpj,materiaprima,email])
}

const sql_delete = 
        `delete from fornecedor where fornecedor.idfornecedor = $1`

const deletefornecedor = async(params)=>{
    const {id} = params 
    await db.query(sql_delete,[id])
}

const sql_put =
        `update fornecedor
            set fantasia = $2,
                razaosocial = $3,
                cnpj = $4,
                materiaprima = $5,
                email = $6
            where idfornecedor = $1
        `
const putfornecedor = async(params)=>{
    const {fantasia,razaosocial,cnpj,materiaprima,email} = params 
    await db.query(sql_put,[fantasia,razaosocial,cnpj,materiaprima,email])
}          


const sql_patch = 
        `update fornecedor
        set `
const patchfornecedor = async(params)=>{
    let field =  ''
    let binds = []
    binds.push(params.id)
    let countParams = 0
    if(params.fantasia){
        countParams = 2
        field +=  `fantasia = $${countParams}`
        binds.push(params.fantasia)
    }
    if(params.razaosocial){
        countParams += 1
        field += (field?',':'') +`razaosocial = $${countParams}`
        binds.push(params.razaosocial)
    }
    if(params.cnpj){
        countParams += 1
        field += (field?',':'') +`cnpj = $${countParams}`
        binds.push(params.cnpj)
    }
    if(params.materiaprima){
        countParams += 1
        field += (field?',':'') +`materiaprima = $${countParams}`
        binds.push(params.materiaprima)
    }
    if(params.email){
        countParams += 1
        field += (field?',':'') +`email = $${countParams}`
        binds.push(params.email)
    }


    let sql = sql_patch + field + ` where idfornecedor = $1`
    console.log(sql)
    console.log(binds)
    return await db.query(sql, binds)
}

module.exports.putfornecedor = putfornecedor
module.exports.patchfornecedor = patchfornecedor 
module.exports.postfornecedor = postfornecedor
module.exports.getfornecedor = getfornecedor
module.exports.deletefornecedor = deletefornecedor