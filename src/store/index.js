import Store from '../lib/store.js'
import mutations from './mutations.js'
import state from './state.js'

export default new Store({
  mutations,
  state
})