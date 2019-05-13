<template>
  <div class="categories__id">
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
    this.setLoadedCategories()
  },
  destroyed() {
    this.setUnLoadedCategories()
  },
  methods: {
    ...mapMutations({
      setLoadedCategories: 'setLoadedCategories',
      setUnLoadedCategories: 'setUnLoadedCategories'
    })
  }
}
</script>

<style lang="scss" scoped></style>
