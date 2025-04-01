// importo express
const express = require('express')
// salvo express in una variabile app 
const app = express()
// porta da usare 
const port = 4000
// importo i router
const router = require('./router/posts.js')
// middlewaeres
const errorsHandler = require('./middlewaeres/errorsHandler.js')
const notFound = require('./middlewaeres/notFound.js')


// public asset (in questo caso mi serve per vedere le immagini)
app.use(express.static('public/imgs/posts'))
// traduco il body 
app.use(express.json())
// router
app.use('/posts', router)
// errors
app.use(errorsHandler)
// not found
app.use(notFound)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})