// importiamo i post
const postsList = require('../data/posts.js')

/// FUNZIONI ///


// index
function index(req,res) {
  let filteredPost = postsList
  if (req.query.tags) {

      filteredPost = post.filter(post => post.tags.includes(req.query.tags))

  }
  res.json(filteredPost)
}

// show
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

// store
function store(req,res) {

  console.log(req.body)
  // prendo l'ultimo elemento nell' array e prendo il suo id 
  const id = postsList.at(-1).id + 1
  const {title, content, image, tags} = req.body

  const newPost = {
    id,
    title,
    content,
    image,
    tags
  }

  postsList.push(newPost)

  console.log(postsList)

  res.status(201)
  res.send(newPost)
}

// update
function update(req,res) {
  const id = parseInt(req.params.id)
  const post = postsList.find( postId => postId.id === id)

  if (!post){
    res.status(404)

    return res.json({
      error :"Not Found",
      message : "Post gia eliminato"
      
    })
  }
  post.title = req.body.title
  post.content = req.body.content
  post.image = req.body.image
  post.tags = req.body.tags
  res.sendStatus(204) 
  console.log(post)
}

// modify
function modify(req,res) {
  const id = parseInt(req.params.id)
  const post = postsList.find( postId => postId.id === id)

  if (!post){
    res.status(404)

    return res.json({
      error :"Not Found",
      message : "Il post non esiste"
      
    })
  }

  if(req.body.title){
    post.title = req.body.title
  }
  if (req.body.content) {
    post.content = req.body.content
  }
  if (req.body.image) {
    post.image = req.body.image
  }
  if (req.body.tags) {
    post.tags = req.body.tags
  }
  res.sendStatus(204) 
  console.log(post)
}

// destroy
function destroy(req,res) {
    const id = parseInt(req.params.id)
    const postId = postsList.find( postId => postId.id === id)
  
    if (!postId){
      res.status(204)

      return res.json({
        error :"Not Found",
        message : "Post gia eliminato"
        
      })
    }
    postsList.splice(postsList.indexOf(postId),1)
    res.sendStatus(204) 
    console.log(postsList)
}


// esporto le funzioni di controllo 
module.exports = {index,show,store,update,modify,destroy}