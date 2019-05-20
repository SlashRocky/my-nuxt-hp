<template>
  <div class="categories">
    <CategoriesHeading />
    <div class="categories__inner">
      <div class="categories__items">
        <div
          v-for="category in categories"
          :key="category.id"
          class="categories__item"
          :class="{ 'is-show': showSwitch }"
        >
          <nuxt-link :to="`/blog/categories/${category.slug}`">
            <div class="categories__card">
              <div class="categories__thumbnailWrap">
                <img
                  :src="`${category.acf.catimg.url}`"
                  class="categories__thumbnail"
                />
              </div>
              <div class="categories__content">
                <div class="categories__title">
                  {{ category.slug }}
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="categories__buttonContainer">
        <button class="categories__button" @click="toAllPosts">
          記事一覧を見る
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesHeading from '~/components/blog/categories/CategoriesHeading.vue'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  components: {
    CategoriesHeading
  },
  props: {
    title: {
      type: String,
      default: ''
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
      loadedCategories: 'loadedCategories'
    }),
    ...mapState(['categories', 'posts'])
  },
  watch: {
    async loadedCategories() {
      await this.$_delay(4000)
      this.showSwitch = true
    }
  },
  async created() {
    await this.fetchCategories()
  },
  methods: {
    ...mapActions(['fetchCategories', 'fetchPosts']),
    toAllPosts() {
      this.$router.push('/blog/posts/1')
    }
  }
}
</script>

<style lang="scss" scoped>
.categories {
  a {
    text-decoration: none;
    display: block;
  }
  .categories__inner {
    max-width: 1140px;
    padding: 60px 30px 30px;
    margin: 0 auto;
    .categories__items {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      .categories__item {
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
          @for $i from 1 through 99 {
            &:nth-of-type(#{$i}) {
              animation: 0.5s itemShow ($i * 0.15s + 1s) ease-out forwards;
            }
          }
        }
        &:hover {
          .categories__thumbnail {
            transform: scale(1.1);
            transition-duration: 0.3s;
            opacity: 0.6;
          }
          .categories__title {
            opacity: 0.6;
          }
        }
      }
      .categories__card {
        border: none;
        box-shadow: 5px 5px 8px 3px rgba(0, 0, 0, 0.1);
        .categories__thumbnailWrap {
          overflow: hidden;
          width: 100%;
          height: auto;
          .categories__thumbnail {
            display: block;
            width: 100%;
            height: auto;
            transition-duration: 0.3s;
          }
        }
        .categories__content {
          padding: 15px;
          .categories__time {
            display: inline-block;
            font-size: 11px;
            font-weight: 700;
            margin-bottom: 7px;
          }
          .categories__title {
            line-height: 1.5;
            font-size: 16px;
          }
        }
      }
    }
    .categories__buttonContainer,
    .categories__pager {
      text-align: center;
      margin-bottom: 30px;
      .categories__button {
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
