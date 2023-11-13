// todoController.js

const todos = [];

const createTodo = (todoData) => {
  const newTodo = {
    id: todos.length + 1,
    ...todoData,
  };
  console.log(todoData)
  todos.push(newTodo);
  return newTodo;
};

const getTodos = () => todos;

const getTodoById = (id) => todos.find((todo) => todo.id === parseInt(id));

const updateTodo = (todo, updatedData) => {
  Object.assign(todo, updatedData);
};

const deleteTodoById = (id) => {
  const index = todos.findIndex((todo) => todo.id === parseInt(id));
  if (index !== -1) {
    todos.splice(index, 1);
  }
};

module.exports = {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodoById,
};
