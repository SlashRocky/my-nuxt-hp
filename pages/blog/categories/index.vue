<template>
  <div class="categories__id">
    <Nav />
    <main>
      <posts-heading type="categories" />
      <categories title="カテゴリ一覧" />
    </main>
    <Footer />
  </div>
</template>

<script>
import PostsHeading from '~/components/blog/posts/PostsHeading.vue'
import Categories from '~/components/blog/categories/Categories.vue'
import Nav from '~/components/common/Nav.vue'
import Footer from '~/components/common/Footer.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    PostsHeading,
    Categories,
    Nav,
    Footer
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
  head() {
    return {
      title: `カテゴリ一覧`
    }
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
