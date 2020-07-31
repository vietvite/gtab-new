export default {
  addTodo(state, payload){
    // return the state before exec push func
    // because if we return like:
    //   `return state.todos.push(payload)`
    // it will return the current array length of `state`
    // instead of the array object
    state.todos.push(payload)
    return state
  },
  removeTodo(state, payload) {
    state.todos.splice(payload.index, 1)
    return state
  }
}