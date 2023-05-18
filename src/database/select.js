const db = require('./db')

const sql_get = 
            `select * from cliente`

const getusuario = async() =>{
    result = await db.query(sql_get)
    return await db.query(sql_get, [])  
}

const sql_insert = 
            `insert into cliente(usuario,senha)
            values ($1, $2)`

const postusuario = async(params)=>{
    const {usuario,senha} = params 
    await db.query(sql_insert,[usuario,senha])
}

const sql_delete = 
        `delete from cliente where cliente.idusuario = $1`

const deleteusuario = async(params)=>{
    const {id} = params 
    await db.query(sql_delete,[id])
}

const sql_put =
        `update cliente
            set usuario = $2,
                senha = $3
            where idusuario = $1
        `
const putusuario = async(params)=>{
    const {id,usuario,senha} = params 
    await db.query(sql_put,[id,usuario,senha])
}          


const sql_patch = 
        `update cliente
        set `
const patchusuario = async(params)=>{
    let field =  ''
    let binds = []
    binds.push(params.id)
    let countParams = 0
    if(params.usuario){
        countParams = 2
        field +=  `usuario = $${countParams}`
        binds.push(params.usuario)
    }
    if(params.senha){
        countParams = 2
        field += `senha = $${countParams}`
        binds.push(params.senha)
    }

    let sql = sql_patch + field + ` where idusuario = $1`
    console.log(sql)
    console.log(binds)
    return await db.query(sql, binds)
}

module.exports.putusuario = putusuario
module.exports.patchusuario = patchusuario 
module.exports.postusuario = postusuario
module.exports.getusuario = getusuario
module.exports.deleteusuario = deleteusuario