let todoId = 0
export const addTodo = (text) => ({
  type: 'addTodo',
  payload: {
    id: todoId++,
    text,
    completed: false
  }
})
export const removeTodo = (id) => ({
  type: 'removeTodo',
  payload: id
})