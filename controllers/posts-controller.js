const postsList = require('../data/posts.js')

function index(req,res) {
    let filteredPost = postsList
    if (req.query.tags) {

        filteredPost = post.filter(post => post.tags.includes(req.query.tags))

    }
    res.json(filteredPost)
}

function show(req,res) {
    const id = parseInt(req.param.id)
    const postId = postsList.find( postId => postId === id)
  
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
    const id = parseInt(req.param.id)
    const postId = postsList.find( postId => postId === id)
    res.send(`Modifica parziale ${postId}`)
}

function update(req,res) {
    const id = parseInt(req.param.id)
    const postId = postsList.find( postId => postId === id)
    res.send(`Modifica integrale ${postId}`)
}

function modify(req,res) {
    const id = parseInt(req.param.id)
    const postId = postsList.find( postId => postId === id)
    res.send(`Modifica parziale ${postId}`)
}

function destroy(req,res) {
    const id = parseInt(req.param.id)
    const postId = postsList.find( postId => postId === id)
  
    if (!postId){
      res.status(404)
      return res.json({
        error :"Not Found",
        message : "Post non trovato"
        
      })
    }
    res.json(postId) 
}

module.exports = {index,show,store,update,modify,destroy}