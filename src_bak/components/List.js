import BaseComponent from '../lib/baseComponent.js'
import store from '../store/index.js'

export default class List extends BaseComponent {
  constructor() {
    super({
      store,
      element: document.querySelector('.js-items')
    })
  }

  render() {
    let self = this

    if (store.state.items.length === 0) {
      self.element.innerHTML = `
        <p>No todo remain. Take and enjoy a cup of coffee.</p>
      `
      return
    }

    self.element.innerHTML = `
      <ul>
        ${
          store.state.items.map(
            item => (
              `<li>
                <label>
                  <input type="checkbox">
                  ${item}
                  </label>
                </li>
              `)).join('')
          }
        </ul> `

    self.element.querySelectorAll('button').forEach((button, index) => {
      button.addEventListener('click', () => {
        store.dispatch('clearItem', { index })
      })
    });
  }
}