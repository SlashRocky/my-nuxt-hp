<template>
  <div id="postsId" class="posts__id">
    <Nav />
    <main>
      <posts-heading type="posts" />
      <posts title="記事一覧" type="posts" :page="page" :per-page="perPage" />
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
  scrollToTop: true,
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
      page: parseInt(params.id)
    }
  },
  head() {
    return {
      title: `記事一覧 - ${this.page}ページ目`
    }
  },
  mounted() {
    this.setLoadedPosts()
  },
  destroyed() {
    this.setUnLoadedPosts()
  },
  methods: {
    ...mapMutations({
      setLoadedPosts: 'setLoadedPosts',
      setUnLoadedPosts: 'setUnLoadedPosts'
    })
  }
}
</script>

<style lang="scss" scoped></style>
