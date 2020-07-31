import store from './store/index.js'
import List from './components/List.js'
import { addTodo } from './store/actions.js'

const formEl = document.querySelector('.js-form')
const inputEl = document.querySelector('#addTodo')
inputEl.focus()

formEl.addEventListener('submit', e => {
  e.preventDefault()
  let text = inputEl.value.trim()
  if (text) {
    store.dispatch(addTodo(text))
    inputEl.value = ''
    inputEl.focus()
  }
})

const listInstance = new List()
listInstance.render()