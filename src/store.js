import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foo: 'bar'
  },
  getters: {
    foo: state => state.foo
  },
  mutations: {

  },
  actions: {

  }
})
