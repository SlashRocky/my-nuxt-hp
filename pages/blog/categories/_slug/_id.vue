<template>
  <div class="categories__slug__id">
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
    this.setLoadedCategoriesSlug()
  },
  destroyed() {
    this.setUnLoadedCategoriesSlug()
  },
  methods: {
    ...mapMutations({
      setLoadedCategoriesSlug: 'setLoadedCategoriesSlug',
      setUnLoadedCategoriesSlug: 'setUnLoadedCategoriesSlug'
    })
  }
}
</script>

<style lang="scss" scoped></style>
