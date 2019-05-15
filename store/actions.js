import api from '~/api/wp/index'

export default {
  async fetchCategories({ commit }) {
    try {
      const response = await api.getCategories()
      commit('updateCategories', response)
    } catch (error) {
      console.log(error)
    }
  },
  async fetchPosts({ commit }, params) {
    try {
      const response = await api.getPosts(params)
      commit('updatePosts', response)
    } catch (error) {
      console.log(error)
    }
  }
}
