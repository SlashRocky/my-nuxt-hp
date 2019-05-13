export default {
  click(state) {
    state.openedNav = !state.openedNav
  },
  setLoadedIndex(state) {
    state.loadedIndex = true
  },
  setUnLoadedIndex(state) {
    state.loadedIndex = false
  },
  setLoadedAbout(state) {
    state.loadedAbout = true
  },
  setUnLoadedAbout(state) {
    state.loadedAbout = false
  },
  setLoadedPosts(state) {
    state.loadedPosts = true
  },
  setUnLoadedPosts(state) {
    state.loadedPosts = false
  },
  setLoadedPost(state) {
    state.loadedPost = true
  },
  setUnLoadedPost(state) {
    state.loadedPost = false
  },
  setLoadedCategories(state) {
    state.loadedCategories = true
  },
  setUnLoadedCategories(state) {
    state.loadedCategories = false
  },
  setLoadedCategoriesSlug(state) {
    state.loadedCategoriesSlug = true
  },
  setUnLoadedCategoriesSlug(state) {
    state.loadedCategoriesSlug = false
  }
}
