const postsList = require('../data/posts.js')

function index(req,res) {
    let filteredPost = postsList
    if (req.query.id) {

        filteredPost = post.filter(post => post.id.includes(req.query.id))

    }
    res.json(filteredPost)
}

function show(req,res) {
    const id = parseInt(req.params.id)
    const postId = postsList.find( postId => postId.id === id)
  
    if (!postId){
      res.status(404)
      return res.json({
        error :"Not Found",
        message : "Post non trovato"
        
      })
    }
    res.json(postId)
}

function store(req,res) {
    res.send('Creazione nuovo post ' + req.params.id)
}

function update(req,res) {
    res.send('Modifica integrale ' + req.params.id)
}

function modify(req,res) {
    res.send('Modifica parziale ' + req.params.id)
}

function destroy(req,res) {
    const id = parseInt(req.params.id)
    const postId = postsList.find( postId => postId.id === id)
  
    if (!postId){
      res.status(404)

      return res.json({
        error :"Not Found",
        message : "Post gia eliminato"
        
      })
    }
    postsList.splice(postsList.indexOf(postId),1)
    res.sendStatus(204) 
    console.log(postsList)
}

module.exports = {index,show,store,update,modify,destroy}