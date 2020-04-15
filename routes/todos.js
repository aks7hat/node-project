const { Router } = require('express')
const { Todos } = require('../db')
const bodyParser = require('body-parser')
const route = Router()
var urlencodedParser = bodyParser.urlencoded({extended:true});

route.get('/', async (req, res) => {
  const todos = await Todos.findAll()
  res.send(todos)
  // res.render("/.public/index.html")
})



route.get('/:id', async (req, res) => {
  if (isNaN(Number(req.params.id))) {
    return res.status(400).send({   
      error: 'todo id must be an integer',
    })
  }
  
  const todo = await Todos.findByPk(req.params.id)

  if (!todo) {
    return res.status(404).send({
      error: 'No todo found with id = ' + req.params.id,
    })
  }
  res.send(todo)
})
route.get('/:id/:notes' , async(req , res)=>
{
  if (isNaN(Number(req.params.id))) {
    return res.status(400).send({   
      error: 'todo id must be an integer',
    })
  }
  else{
    
    var com = req.params.notes
    res.send(com)
  }
})


route.post('/', async (req, res) => {
  
  if (typeof req.body.task !== 'string') {
    return res.status(400).send({ error: 'Task name not provided' })
  }
  if (req.body.done === 'true') {
    req.body.done = true
  } else {
    req.body.done = false
  }

  const newTodo = await Todos.create({
      task: req.body.task,
      done: req.body.done,
      due: req.body.due,
      notes:req.body.notes,
      description:req.body.description,
      priority:req.body.priority,
  })

  res.status(201).send({ success: 'New task added', data: newTodo })
  
})

// route.post('/newTodo',function(req,res)
// {
  
// })

module.exports = route