const db = require('../database/db')

const sql_get = 
            `select * from estadonota`

const getestadonota = async() =>{
    result = await db.query(sql_get)
    return await db.query(sql_get, [])  
}

const sql_insert = 
        `insert into estadonota (numeronota,estad0,uf)
        values ($1,$2,$3)
        `
const postestadonota = async(params)=>{
    const {numeronota,estad0,uf} = params 
    await db.query(sql_insert,[numeronota,estad0,uf])
}

const sql_delete = 
        `delete from estadonota where estadonota.idestadonota = $1`

const deleteestadonota = async(params)=>{
    const {id} = params 
    await db.query(sql_delete,[id])
}

const sql_put =
                `update estadonota
                    set numeronota = $2,
                    estad0 = $3,
                    uf = $4
                where idestadonota = $1
                `
const putestadonota = async(params)=>{
    const {numeronota,estad0,uf} = params 
    await db.query(sql_put,[numeronota,estad0,uf])
}          


const sql_patch = 
        `update estadonota
        set `
const patchestadonota = async(params)=>{
    let field =  ''
    let binds = []
    binds.push(params.id)
    let countParams = 0
    if(params.numeronota){
        countParams = 2
        field +=  `numeronota = $${countParams}`
        binds.push(params.numeronota)
    }
    if(params.estad0){
        countParams += 1
        field += (field?',':'') +`estad0 = $${countParams}`
        binds.push(params.estad0)
    }
    if(params.uf){
        countParams += 1
        field += (field?',':'') +`uf = $${countParams}`
        binds.push(params.uf)
    }    
    let sql = sql_patch + field + ` where idestadonota = $1`
    console.log(sql)
    console.log(binds)
    return await db.query(sql, binds)
}

module.exports.putestadonota = putestadonota
module.exports.patchestadonota = patchestadonota 
module.exports.postestadonota = postestadonota
module.exports.getestadonota = getestadonota
module.exports.deleteestadonota = deleteestadonota