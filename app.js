const express = require('express')
const app = express()
const port = 4000
const router = require('./router/posts.js')


// public asset
app.use(express.static('public/imgs/posts'))

app.get('/', (req,res)=>{
    res.send('Siamo dentro al server')
})

app.use('/posts', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})