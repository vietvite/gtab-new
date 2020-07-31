import Observer from './observer.js'

export default class Store {
  constructor(params) {
    // Declare self for use in Proxy handler object
    let self = this

    this.mutations = {}
    this.state = {}
    this.events = new Observer()

    this.status = 'resting'

    if(params.hasOwnProperty('mutations')) {
      this.mutations = params.mutations
    }

    this.state = new Proxy((params.state || {}), {
      set: function (state, key, value) {
        state[key] = value;

        self.events.publish('stateChange', self.state)

        if(self.status !== 'mutation') {
          console.warn(`You should use a mutation to set ${key}`)
        }
        self.state = 'resting'

        return true
      }
    })
  }

  /**
   * Mutation the state
   * 
   * @param {Object} action is an object that shape:
   * {
   *   type: mutation type,
   *   payload: data send to state
   * }
   */
  dispatch(action) {
    if(typeof this.mutations[action.type] !== 'function') {
      console.warn(`Mutation '${action.type}' doesn't exist.`)
      return false
    }

    this.status = 'mutation'
    let newState = this.mutations[action.type](this.state, action.payload)
    this.state = Object.assign(this.state, newState)

    return true
  }
}