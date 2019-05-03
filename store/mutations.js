export default {
  click(state) {
    state.openedNav = !state.openedNav
  },
  setLoadedIndex(state) {
    state.loadedIndex = true
  },
  setUnloadedIndex(state) {
    state.loadedIndex = false
  },
  setLoadedAbout(state) {
    state.loadedAbout = true
  },
  setUnLoadedAbout(state) {
    state.loadedAbout = false
  }
}
