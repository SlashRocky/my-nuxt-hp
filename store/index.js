import Vue from 'vue'
import Vuex from 'vuex'

import appState from './state.js'
import appMutations from './mutations.js'
import appGetters from './getters.js'

Vue.use(Vuex)

export const state = () => {
  appState
}
export const mutations = () => {
  appMutations
}
export const getters = () => {
  appGetters
}
