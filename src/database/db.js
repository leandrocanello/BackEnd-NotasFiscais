const { Pool } = require('pg')

const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'amanda',
    password: '= 123456',
    port: 5434
})

// const pool = new Pool({
//     connectionString: 'postgres://admin:= 123456@amanda:5434/amanda'
// })

module.exports = {query:(text,params)=> pool.query(text,params)}