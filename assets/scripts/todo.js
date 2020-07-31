// let todoId = 0

// function state() {
//   const todos = []

//   function updateTodos(todos, todo) {
//     todos = [todo, ...todos]
//   }
//   function addTodo(text) {
//     updateTodos(todos, createTodo(text))
//   }
//   function completeTodo(id) {
//     todos = todos.map(todo => todo.id === id ? { ...todo, completed: true } : todo)
//   }
//   function createTodo(text) {
//     return {
//       id: todoId++,
//       completed: false,
//       text
//     }
//   }
//   function deleteTodo(id) {
//     todos = todos.filter(todo => todo.id !== id)
//   }
//   function deleteCompletedTodos() {
//     todos = todos.filter(todo => todo.completed)
//   }
//   function getAllTodos() {
//     return todos;
//   }
//   function getActiveTodos() {
//     return todos.filter(todo => !todo.completed)
//   }
//   function getCompletedTodos() {
//     return todos.filter(todo => todo.completed)
//   }

//   return Object.freeze({
//     getAllTodos,
//     getActiveTodos,
//     getCompletedTodos,
//     addTodo,
//     completeTodo,
//     deleteTodo,
//     deleteCompletedTodos
//   })
// }
