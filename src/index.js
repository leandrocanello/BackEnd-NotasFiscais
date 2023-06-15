const express = require('express')
const app = express()

app.use(express.json())
require('./services/swagger')


require('./router')(app)

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/v1/docs', express.static('src/views'))
app.use('/docs/swagger.yaml', express.static('src/docs/swagger.yaml'))

app.listen(3000,()=>{
    console.log(`Express started at http://localhost:3000`)
})