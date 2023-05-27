const db = require('../database/db')

const sql_get = 
            `select * from usuario`

const getusuario = async() =>{
    result = await db.query(sql_get)
    return await db.query(sql_get, [])  
}

const sql_insert = 
            `insert into usuario(usuario,senha,sexo,setor)
            values ($1, $2, $3, $4)`

const postusuario = async(params)=>{
    const {usuario,senha,sexo,setor} = params 
    await db.query(sql_insert,[usuario,senha,sexo,setor])
}

const sql_delete = 
        `delete from usuario where usuario.idusuario = $1`

const deleteusuario = async(params)=>{
    const {id} = params 
    await db.query(sql_delete,[id])
}

const sql_put =
        `update usuario
            set usuario = $2,
                senha = $3,
                sexo = $4,
                setor = $5
            where idusuario = $1
        `
const putusuario = async(params)=>{
    const {id,usuario,senha,sexo,setor} = params 
    await db.query(sql_put,[id,usuario,senha,sexo,setor])
}          


const sql_patch = 
        `update usuario
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
        countParams += 1
        field += (field?',':'') +`senha = $${countParams}`
        binds.push(params.senha)
    }
    if(params.sexo){
        countParams += 1
        field += (field?',':'') +`sexo = $${countParams}`
        binds.push(params.sexo)
    }
    if(params.setor){
        countParams += 1
        field += (field?',':'') +`setor = $${countParams}`
        binds.push(params.setor)
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