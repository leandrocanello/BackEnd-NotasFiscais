const express = require('express')
const app = express()

app.use(express.json())


require('./router')(app)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000,()=>{
    console.log(`Express started at http://localhost:3000`)
})