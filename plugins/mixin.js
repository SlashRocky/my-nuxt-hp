import Vue from 'vue'

Vue.mixin({
  methods: {
    $_delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  }
})
