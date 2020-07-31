import EventPubSub from '../lib/pubSub.js'

export default class Store {
  constructor(params) {
    // NOTE: Why have to set `self = this` instead of straghtforward use `this` keyword
    let self = this

    this.actions = {}
    this.mutations = {}
    this.state = {}
    this.events = new EventPubS()

    this.status = 'resting'

    if(params.hasOwnProperty('actions')) {
      this.actions = params.actions
    }
    if(params.hasOwnProperty('mutations')) {
      this.mutations = params.mutations
    }

    this.state = new Proxy((params.state || {}), {
      set: function (state, key, value) {
        state[key] = value;

        // Fire notification to subscriber in channel stateChange
        self.events.publish('stateChange', self.state)

        if(self.status !== 'mutation') {
          console.warn(`You should use a mutation to set ${key}`)
        }
        self.status = 'resting'

        return true
      }
    })
  }

  dispatch(actionType, payload) {
    let self = this

    if(typeof self.actions[actionType] !== 'function') {
      console.error(`Action '${actionType}' doesn't exist.`)
      return false
    }

    // console.groupCollapsed(`ACTION: ${actionType}`)
    self.status = 'action'
    self.actions[actionType](self, payload)
    // console.groupEnd()

    return true
  }

  commit(mutationType, payload) {
    let self = this
    if(typeof self.mutations[mutationType] !== 'function') {
      console.warn(`Mutation '${mutationType}' doesn't exist.`)
      return false
    }

    self.status = 'mutation'
    let newState = self.mutations[mutationType](self.state, payload)
    self.state = Object.assign(self.state, newState)

    return true
  }
}