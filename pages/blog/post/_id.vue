<template>
  <div class="post__id">
    <Nav />
    <main class="post__main">
      <div class="post__inner" :class="{ 'is-show': showSwitch }">
        <div v-if="post.thumbnail" class="post__thumbnailWrap">
          <img :src="post.thumbnail" class="post__thumbnail" />
        </div>
        <div class="post__meta">
          <div class="post__time">
            {{ dateFormat(post.date) }}
          </div>
          <h1 class="post__title">
            {{ post.title }}
          </h1>
          <div class="post__content" v-html="post.content"></div>
        </div>
        <div class="post__pager">
          <button class="post__button" @click="backPage">
            Back
          </button>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import api from '~/api/wp/index'
import Nav from '~/components/common/Nav.vue'
import Footer from '~/components/common/Footer.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    Nav,
    Footer
  },
  data() {
    return {
      showSwitch: false
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
  watch: {
    async loadedPost() {
      await this.$_delay(4000)
      this.showSwitch = true
    }
  },
  async asyncData({ params, error }) {
    const urlParams = {
      id: params.id,
      thumbnailSize: 'large'
    }
    try {
      const post = await api.getPost(urlParams)
      return {
        post: post
      }
    } catch (error) {
      console.log(error)
      error({ statusFile: 404, message: 'ページが見つかりません' })
    }
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
    }),
    dateFormat(date) {
      return this.$_dateFormat(date)
    },
    backPage() {
      this.$router.go(-1)
    }
  },

  head() {
    return {
      title: `記事 - ${this.post.title}`
    }
  }
}
</script>

<style lang="scss" scoped>
.post__id {
  .post__main {
    padding: 60px 0;
    .post__inner {
      opacity: 0;
      &.is-show {
        animation: 0.5s articleShow ease-out forwards;
      }
      max-width: 1140px;
      margin: 0 auto;
      padding: 0 30px;
      .post__thumbnailWrap {
        text-align: center;
        .post__thumbnail {
          display: inline-block;
          width: 100%;
          height: auto;
          vertical-align: bottom;
          margin-bottom: 30px;
        }
      }
      .post__meta {
        margin-bottom: 30px;
        .post__time {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 0.5rem;
          text-align: left;
          color: #b1b1b1;
        }
        .post__title {
          line-height: 1.5;
          font-size: 2rem;
          margin-bottom: 2rem;
          text-align: center;
        }
        .post__content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
      }
      .post__pager {
        text-align: center;
        margin-bottom: 30px;
        .post__button {
          cursor: pointer;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          align-self: flex-start;
          white-space: nowrap;
          border-radius: 0.1875rem;
          line-height: 1.5;
          text-align: center;
          transition: 0.2s ease-out;
          background-color: #130f40;
          color: #ffffff;
          font-size: 14px;
          box-shadow: 0 8px 16px rgba(19, 15, 64, 0.15);
          border: 1px solid transparent;
          font-size: 14px;
          padding: 0.6rem 1.5rem;
          margin: 1rem;
          outline: none;
          &:hover {
            color: #454545;
            background: #ffffff;
          }
        }
      }
    }
  }
}

@keyframes articleShow {
  0% {
    opacity: 0;
    transform: translate(0, 20px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0px);
  }
}
</style>
