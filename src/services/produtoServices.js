const db = require('../database/db')

const sql_get = 
            `select * from produto`

const getproduto = async() =>{
    result = await db.query(sql_get)
    return await db.query(sql_get, [])  
}

const sql_insert = 
            `insert into produto(descricao,cor,largura,altura,comprimento)
            values ($1, $2, $3, $4, $5)`

const postproduto = async(params)=>{
    const {descricao,cor,largura,altura,comprimento} = params 
    await db.query(sql_insert,[descricao,cor,largura,altura,comprimento])
}

const sql_delete = 
        `delete from produto where produto.id = $1`

const deleteproduto = async(params)=>{
    const {id} = params 
    await db.query(sql_delete,[id])
}

const sql_put =
        `update produto
            set descricao = $2,
                cor = $3,
                largura = $4,
                altura = $5,
                comprimento = $6
            where id = $1
        `
const putproduto = async(params)=>{
    const {id,descricao,cor,largura,altura,comprimento} = params 
    await db.query(sql_put,[id,descricao,cor,largura,altura,comprimento])
}          


const sql_patch = 
        `update produto
        set `
const patchproduto = async(params)=>{
    let field =  ''
    let binds = []
    binds.push(params.id)
    let countParams = 0
    if(params.descricao){
        countParams = 2
        field +=  `descricao = $${countParams}`
        binds.push(params.descricao)
    }
    if(params.cor){
        countParams += 1
        field += (field?',':'') +`cor = $${countParams}`
        binds.push(params.cor)
    }
    if(params.largura){
        countParams += 1
        field += (field?',':'') +`largura = $${countParams}`
        binds.push(params.largura)
    }
    if(params.altura){
        countParams += 1
        field += (field?',':'') +`altura = $${countParams}`
        binds.push(params.altura)
    }
    if(params.comprimento){
        countParams += 1
        field += (field?',':'') +`comprimento = $${countParams}`
        binds.push(params.comprimento)
    }

    let sql = sql_patch + field + ` where id = $1`
    console.log(sql)
    console.log(binds)
    return await db.query(sql, binds)
}

module.exports.putproduto = putproduto
module.exports.patchproduto = patchproduto 
module.exports.postproduto = postproduto
module.exports.getproduto = getproduto
module.exports.deleteproduto = deleteproduto