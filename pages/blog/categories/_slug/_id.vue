<template>
  <div class="categories__slug__id">
    <Nav />
    <main>
      <posts-heading type="slug" :title="catSlug" />
      <posts
        :title="catSlug"
        type="slug"
        :page="page"
        :per-page="perPage"
        :cat-slug="catSlug"
      />
    </main>
    <Footer />
  </div>
</template>

<script>
import PostsHeading from '~/components/blog/posts/PostsHeading.vue'
import Posts from '~/components/blog/posts/Posts.vue'
import Nav from '~/components/common/Nav.vue'
import Footer from '~/components/common/Footer.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    PostsHeading,
    Posts,
    Nav,
    Footer
  },
  data() {
    return {
      perPage: 9
    }
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
  async asyncData({ params }) {
    return {
      page: parseInt(params.id),
      catSlug: params.slug
    }
  },
  head() {
    return {
      title: `${this.catSlug} - ${this.page}ページ目`
    }
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
