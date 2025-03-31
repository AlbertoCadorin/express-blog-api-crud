const express = require('express')
const app = express()
const port = 4000
const router = require('./router/posts.js')


// public asset
app.use(express.static('public/imgs/posts'))
app.use(express.json())

app.use('/posts', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})