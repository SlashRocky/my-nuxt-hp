<template>
  <div class="posts">
    <PostHeading />
    <div class="posts__inner">
      <div class="posts__items">
        <div
          v-for="post in posts.data"
          :key="post.id"
          class="posts__item"
          :class="{ 'is-show': showSwitch }"
        >
          <nuxt-link :to="`/blog/post/${post.id}`">
            <div class="posts__card">
              <div class="posts__thumbnailWrap">
                <img
                  :src="post.thumbnail || noImageUrl"
                  class="posts__thumbnail"
                />
              </div>
              <div class="posts__content">
                <div class="posts__time">
                  {{ dateFormat(post.date) }}
                </div>
                <div class="posts__title">
                  {{ post.title }}
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div v-if="type === 'index'" class="posts__buttonContainer">
        <button class="posts__button" @click="toAllPosts">
          全記事見る
        </button>
      </div>
      <div v-else-if="type === 'posts'" class="posts__pager">
        <button v-if="page !== 1" class="posts__button" @click="prevPage">
          Prev
        </button>
        <button
          v-if="page < posts.totalPages"
          class="posts__button"
          @click="nextPage"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PostHeading from '~/components/blog/posts/PostsHeading.vue'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  components: {
    PostHeading
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'index'
    },
    page: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 9
    },
    thumbnailSize: {
      type: String,
      default: 'large'
    },
    catSlug: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      noImageUrl:
        'https://upload.wikimedia.org/wikipedia/ja/b/b5/Noimage_image.png',
      showSwitch: false
    }
  },
  computed: {
    ...mapGetters({
      loadedPosts: 'loadedPosts'
    }),
    ...mapState(['categories', 'posts'])
  },
  watch: {
    async loadedPosts() {
      await this.$_delay(4000)
      this.showSwitch = true
    }
  },
  async created() {
    await this.fetchCategories()

    const cat = this.categories.filter(cat => {
      if (cat.slug === this.catSlug) {
        return true
      }
    })
    const urlParams = {
      page: this.page,
      perPage: this.perPage,
      catId: cat[0] ? cat[0].id : null,
      thumbnailSize: this.thumbnailSize
    }
    await this.fetchPosts(urlParams)
  },
  methods: {
    ...mapActions(['fetchCategories', 'fetchPosts']),
    toAllPosts() {
      this.$router.push('/blog/posts/1')
    },
    prevPage() {
      this.$router.push(`/blog/posts/${this.page - 1}`)
    },
    nextPage() {
      this.$router.push(`/blog/posts/${this.page + 1}`)
    },
    dateFormat(date) {
      return this.$_dateFormat(date)
    }
  }
}
</script>

<style lang="scss" scoped>
.posts {
  a {
    text-decoration: none;
    display: block;
  }
  .posts__inner {
    max-width: 1140px;
    padding: 60px 30px 30px;
    margin: 0 auto;
    .posts__items {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      .posts__item {
        opacity: 0;
        margin-bottom: 30px;
        border: 1px solid transparent;
        flex: 0 0 31%;
        @include mq(blog) {
          flex: 0 0 46.5%;
        }
        @include mq(sm) {
          flex: 0 0 100%;
        }
        &.is-show {
          @for $i from 1 through 9 {
            &:nth-of-type(#{$i}) {
              animation: 0.5s itemShow ($i * 0.15s + 1s) ease-out forwards;
            }
          }
        }
        &:hover {
          .posts__thumbnail {
            transform: scale(1.1);
            transition-duration: 0.3s;
            opacity: 0.6;
          }
          .posts__time {
            opacity: 0.6;
          }
          .posts__title {
            opacity: 0.6;
          }
        }
      }
      .posts__card {
        border: none;
        box-shadow: 5px 5px 8px 3px rgba(0, 0, 0, 0.1);
        .posts__thumbnailWrap {
          overflow: hidden;
          width: 100%;
          height: auto;
          .posts__thumbnail {
            display: block;
            width: 100%;
            height: auto;
            transition-duration: 0.3s;
          }
        }
        .posts__content {
          padding: 15px;
          .posts__time {
            display: inline-block;
            font-size: 11px;
            font-weight: 700;
            margin-bottom: 7px;
          }
          .posts__title {
            line-height: 1.5;
            font-size: 16px;
          }
        }
      }
    }
    .posts__buttonContainer,
    .posts__pager {
      text-align: center;
      margin-bottom: 30px;
      .posts__button {
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

@keyframes itemShow {
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
