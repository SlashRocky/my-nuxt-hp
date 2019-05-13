<template>
  <div class="post__id">
    <Nav />
  </div>
</template>

<script>
import Nav from '~/components/common/Nav.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    Nav
  },
  computed: {
    ...mapGetters({
      openedNav: 'openedNav',
      loadedIndex: 'loadedIndex',
      loadedAbout: 'loadedAbout',
      loadedPosts: 'loadedPosts',
      loadedPost: 'loadedPost',
      loadedCategories: 'loadedCategories',
      loadedCategoriesSlug: 'loadedCategoriesSlug'
    })
  },
  mounted() {
    this.setLoadedPost()
  },
  destroyed() {
    this.setUnLoadedPost()
  },
  methods: {
    ...mapMutations({
      setLoadedPost: 'setLoadedPost',
      setUnLoadedPost: 'setUnLoadedPost'
    })
  }
}
</script>

<style lang="scss" scoped></style>
