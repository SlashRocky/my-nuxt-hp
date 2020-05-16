<template>
  <div id="pageIndex">
    <header class="header">
      <div class="background">
        <Canvas />
      </div>
      <Nav />
      <div class="sns">
        <ul>
          <li class="sns__list fb">
            <a
              href="https://www.facebook.com/masaaki.todoroki.5"
              target="_blank"
              class="sns__link"
              :class="{ 'is-active': showSns }"
            >
              <IconFb />
              <span ref="fbBk" class="bk fbBk"></span>
            </a>
          </li>
          <li class="sns__list tw">
            <a
              href="https://twitter.com/Slash_Rocky"
              target="_blank"
              class="sns__link"
              :class="{ 'is-active': showSns }"
            >
              <IconTw />
              <span ref="twBk" class="bk twBk"></span>
            </a>
          </li>
          <li class="sns__list github">
            <a
              href="https://github.com/SlashRocky"
              target="_blank"
              class="sns__link"
              :class="{ 'is-active': showSns }"
            >
              <IconGithub />
              <span ref="githubBk" class="bk githubBk"></span>
            </a>
          </li>
        </ul>
      </div>
    </header>
    <main class="main">
      <div class="logo">
        <LogoTxt />
        <div
          id="logoDescription"
          class="logo__description"
          :class="{ 'logo__description--active': showDescription }"
        >
          <p>
            <span
              v-for="(text, key) in '神奈川県川崎市在住の'"
              :key="`address-text-${key}`"
              class="logo__description-l01"
            >
              {{ text }}
            </span>
          </p>
          <p>
            <span
              v-for="(text, key) in 'Webエンジニア'"
              :key="`profession-text-${key}`"
              class="logo__description-l02"
            >
              {{ text }}
            </span>
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Canvas from '~/components/index/Canvas.vue'
import Nav from '~/components/common/Nav.vue'
import IconFb from '~/components/icons/fb.vue'
import IconTw from '~/components/icons/tw.vue'
import IconGithub from '~/components/icons/github.vue'
import LogoTxt from '~/components/common/LogoTxt.vue'
import { mapGetters, mapMutations } from 'vuex'
import { TimelineMax, Expo } from 'gsap'

export default {
  components: {
    Canvas,
    Nav,
    IconFb,
    IconTw,
    IconGithub,
    LogoTxt
  },
  data() {
    return {
      showSns: false,
      showDescription: false,
      prevPath: ''
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
    async loadedIndex() {
      this.fbBkAnim()
      await this.$_delay(200)
      this.twBkAnim()
      await this.$_delay(200)
      this.githubBkAnim()
      await this.$_delay(800)
      this.showSns = true
      this.showDescription = true
    }
  },
  asyncData(context) {
    return {
      prevPath: context.from ? context.from.path : ''
    }
  },
  mounted() {
    if (this.prevPath) {
      setTimeout(this.setLoadedIndex, 3000)
    } else {
      this.setLoadedIndex()
    }
  },
  destroyed() {
    this.setUnLoadedIndex()
  },
  methods: {
    ...mapMutations({
      setLoadedIndex: 'setLoadedIndex',
      setUnLoadedIndex: 'setUnLoadedIndex'
    }),
    fbBkAnim() {
      const timeLine = new TimelineMax()
      requestAnimationFrame(() => {
        timeLine
          .set(this.$refs.fbBk, {
            scaleY: 0,
            transformOrigin: 'bottom center',
            ease: Expo.easeIn
          })
          .to(this.$refs.fbBk, 1, {
            scaleY: 1,
            height: '100%',
            ease: Expo.easeIn
          })
          .to(this.$refs.fbBk, 1, {
            scaleY: 0,
            transformOrigin: 'top center',
            ease: Expo.easeIn
          })
      })
    },
    twBkAnim() {
      const timeLine = new TimelineMax()
      requestAnimationFrame(() => {
        timeLine
          .set(this.$refs.twBk, {
            scaleY: 0,
            transformOrigin: 'bottom center',
            ease: Expo.easeIn
          })
          .to(this.$refs.twBk, 1, {
            scaleY: 1,
            height: '100%',
            ease: Expo.easeIn
          })
          .to(this.$refs.twBk, 1, {
            scaleY: 0,
            transformOrigin: 'top center',
            ease: Expo.easeIn
          })
      })
    },
    githubBkAnim() {
      const timeLine = new TimelineMax()
      requestAnimationFrame(() => {
        timeLine
          .set(this.$refs.githubBk, {
            scaleY: 0,
            transformOrigin: 'bottom center',
            ease: Expo.easeIn
          })
          .to(this.$refs.githubBk, 1, {
            scaleY: 1,
            height: '100%',
            ease: Expo.easeIn
          })
          .to(this.$refs.githubBk, 1, {
            scaleY: 0,
            transformOrigin: 'top center',
            ease: Expo.easeIn
          })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#pageIndex {
  max-width: 100%;
  min-height: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
}

.sns {
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  @include mq() {
    right: 1rem;
    bottom: 1rem;
  }
  ul {
    height: 1.5rem;
    li {
      display: inline-block;
      margin-right: 1rem;
      position: relative;
      overflow-x: hidden;
      overflow-y: hidden;
      a {
        display: block;
        height: 1.5rem;
        svg {
          fill: $text-color;
          height: 1.5rem;
          transition: all 0.4s;
          opacity: 0;
        }
        span.bk {
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          background: $text-color;
          &.fbBk {
            width: 12px;
          }
          &.twBk {
            width: 26px;
          }
          &.githubBk {
            width: 23px;
          }
        }
      }
      &:last-child {
        margin-right: 0;
      }
      &.fb {
        a {
          &.is-active {
            svg {
              animation: 2s snsLinkSvg 0.7s forwards;
            }
          }
          svg {
            &:hover {
              fill: #4267b2;
            }
          }
        }
      }
      &.tw {
        a {
          &.is-active {
            svg {
              animation: 2s snsLinkSvg 0.8s forwards;
            }
          }
          svg {
            &:hover {
              fill: #1daaf2;
            }
          }
        }
      }
      &.github {
        a {
          &.is-active {
            svg {
              animation: 2s snsLinkSvg 0.9s forwards;
            }
          }
          svg {
            &:hover {
              fill: #1a1414;
            }
          }
        }
      }
    }
  }
}

.logo {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2rem;
  @include mq() {
    left: 1rem;
  }
  svg {
    width: 360px;
    margin-bottom: 0.5rem;
    @include mq() {
      width: 225px;
    }
  }
  .logo__description {
    font-size: 14px;
    line-height: 1.7;
    letter-spacing: -0.1rem;
    @include mq() {
      font-size: 12px;
    }
    &.logo__description--active {
      p {
        span {
          &.logo__description-l01 {
            @for $i from 1 through 6 {
              &:nth-of-type(#{$i}) {
                animation: 1s
                  logoDescription
                  ((random(19) * 0.1s) + 2s)
                  forwards;
              }
            }
          }
          &.logo__description-l02 {
            @for $i from 1 through 12 {
              &:nth-of-type(#{$i}) {
                animation: 1s
                  logoDescription
                  ((random(19) * 0.1s) + 2s)
                  forwards;
              }
            }
          }
        }
      }
    }
    p {
      span {
        opacity: 0;
      }
    }
  }
}

@keyframes snsLinkSvg {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  53% {
    opacity: 1;
  }
  76% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes logoDescription {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
