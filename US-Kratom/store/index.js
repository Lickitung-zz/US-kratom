import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0
    }),
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
}

export default createStore