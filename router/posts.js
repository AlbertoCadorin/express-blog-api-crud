// impoprto express
const express = require("express")
const router  = express.Router()
// importo i controllers 
const postControllers = require('../controllers/posts-controller.js')

// index
router.get('/', postControllers.index)
// show
router.get('/:id', postControllers.show );
//store
router.post('/', postControllers.store );
//update 
router.put('/:id', postControllers.update );
//modify
router.patch('/:id', postControllers.modify );
//delete
router.delete('/:id', postControllers.destroy );


// esporto router
module.exports = router