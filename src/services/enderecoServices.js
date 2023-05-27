const db = require('../database/db')

const sql_get = 
            `select * from endereco`

const getendereco = async() =>{
    result = await db.query(sql_get)
    return await db.query(sql_get, [])  
}

const sql_insert = 
            `insert into endereco(rua,cidade,cep,bairro,uf)
            values ($1, $2, $3, $4, $5)`

const postendereco = async(params)=>{
    const {rua,cidade,cep,bairro,uf} = params 
    await db.query(sql_insert,[rua,cidade,cep,bairro,uf])
}

const sql_delete = 
        `delete from endereco where endereco.idendereco = $1`

const deleteendereco = async(params)=>{
    const {id} = params 
    await db.query(sql_delete,[id])
}

const sql_put =
        `update endereco
            set rua = $2,
                cidade = $3,
                cep = $4,
                bairro = $5,
                uf = $6
            where idendereco = $1
        `
const putendereco = async(params)=>{
    const {rua,cidade,cep,bairro,uf} = params 
    await db.query(sql_put,[rua,cidade,cep,bairro,uf])
}          


const sql_patch = 
        `update endereco
        set `
const patchendereco = async(params)=>{
    let field =  ''
    let binds = []
    binds.push(params.id)
    let countParams = 0
    if(params.rua){
        countParams = 2
        field +=  `rua = $${countParams}`
        binds.push(params.rua)
    }
    if(params.cidade){
        countParams += 1
        field += (field?',':'') +`cidade = $${countParams}`
        binds.push(params.cidade)
    }
    if(params.cep){
        countParams += 1
        field += (field?',':'') +`cep = $${countParams}`
        binds.push(params.cep)
    }
    if(params.bairro){
        countParams += 1
        field += (field?',':'') +`bairro = $${countParams}`
        binds.push(params.bairro)
    }
    if(params.uf){
        countParams += 1
        field += (field?',':'') +`uf = $${countParams}`
        binds.push(params.uf)
    }


    let sql = sql_patch + field + ` where idendereco = $1`
    console.log(sql)
    console.log(binds)
    return await db.query(sql, binds)
}

module.exports.putendereco = putendereco
module.exports.patchendereco = patchendereco 
module.exports.postendereco = postendereco
module.exports.getendereco = getendereco
module.exports.deleteendereco = deleteendereco