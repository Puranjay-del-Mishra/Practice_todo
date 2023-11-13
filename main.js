https = require('https')
express = require('express')
const port = 3000
const app = express()

app.use(express.json());

app.listen(port, ()=>{
    console.log('The server is running locally!')
})

const {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodoById,
  } = require('./todoController');
  
  // Create a Todo
  app.post('/todos', (req, res) => {
    const newTodo = createTodo(req.body);
    res.json(newTodo);
  });

  
  // Get all Todos
  app.get('/todos', (req, res) => {
    const todos = getTodos();
    res.json(todos);
  });
  
  // Get a specific Todo by ID
  app.get('/todos/:id', (req, res) => {
    const todo = getTodoById(req.params.id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  });
  
  // Update a Todo by ID
  app.put('/todos/:id', (req, res) => {
    const todo = getTodoById(req.params.id);
    if (todo) {
      updateTodo(todo, req.body);
      res.json(todo);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  });
  
  // Delete a Todo by ID
  app.delete('/todos/:id', (req, res) => {
    console.log(req.params.id)
    const todo = getTodoById(req.params.id);
    if (todo) {
      deleteTodoById(req.params.id);
      res.json(todo);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  });