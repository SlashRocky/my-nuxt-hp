<template>
  <div class="posts__heading">
    <div id="sectionLinePosition" ref="sectionLinePosition"></div>
    <div id="sectionLine" ref="sectionLine" class="section-line"></div>
    <section id="blogSection" class="section">
      <div id="blogSectionInner" class="section__inner">
        <div id="blogSectionTitle" class="section__title">
          <div class="section__container section__container01">
            <h2 ref="sectionEn" class="section__en jos">
              <div ref="sectionEnBk" class="bk"></div>
              <span v-for="(text, key) in 'Blog'" :key="`blog-text-en-${key}`">
                {{ text }}
              </span>
            </h2>
          </div>
          <div class="section__container section__container02">
            <h2 ref="sectionJp" class="section__jp">
              <div ref="sectionJpBk" class="bk"></div>
              <span
                v-for="(text, key) in '記事一覧'"
                :key="`blog-text-jp-${key}`"
              >
                {{ text }}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      showSwitch: false
    }
  },
  computed: {
    ...mapGetters({
      loadedPosts: 'loadedPosts'
    })
  },
  watch: {
    async loadedPosts() {
      await this.$_delay(3000)
      this.sectionLineAnim()
      this.blogTxtEnBkAnim()
      this.blogTxtJpBkAnim()
    }
  },
  methods: {
    sectionLineAnim() {
      const sectionLine = this.$refs.sectionLine
      sectionLine.classList.add('is-active')
      const tlSectionLineAnim = new TimelineMax()
      requestAnimationFrame(() => {
        tlSectionLineAnim
          .to(sectionLine, 0.7, {
            scaleX: 1.2,
            width: '120%',
            ease: Expo.easeIn
          })
          .to(sectionLine, 1, {
            rotation: -3,
            ease: Back.easeInOut.config(1.5)
          })
      })
    },
    blogTxtEnBkAnim() {
      const sectionEn = this.$refs.sectionEn
      sectionEn.classList.add('is-active')
      const sectionEnBk = this.$refs.sectionEnBk
      const tlSectionEnBk = new TimelineMax()
      requestAnimationFrame(() => {
        tlSectionEnBk
          .set(sectionEnBk, {
            scaleX: 0,
            transformOrigin: 'left center',
            ease: Expo.easeIn
          })
          .to(sectionEnBk, 1, {
            scaleX: 1,
            width: '100%',
            ease: Expo.easeIn
          })
          .to(sectionEnBk, 1, {
            scaleX: 0,
            transformOrigin: 'right center',
            ease: Expo.easeIn
          })
      })
    },
    blogTxtJpBkAnim() {
      const sectionJp = this.$refs.sectionJp
      sectionJp.classList.add('is-active')
      const sectionJpBk = this.$refs.sectionJpBk
      const tlSectionJpBk = new TimelineMax()
      requestAnimationFrame(() => {
        tlSectionJpBk
          .set(sectionJpBk, {
            scaleX: 0,
            transformOrigin: 'left center',
            ease: Expo.easeIn
          })
          .to(sectionJpBk, 1, {
            scaleX: 1,
            width: '100%',
            ease: Expo.easeIn
          })
          .to(sectionJpBk, 1, {
            scaleX: 0,
            transformOrigin: 'right center',
            ease: Expo.easeIn
          })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.posts__heading {
  position: relative;
  margin-bottom: 4rem;
  @include mq() {
    margin-bottom: 2rem;
  }
  .section-line {
    width: 0%;
    height: 10rem;
    background: #eaeaea;
    margin-left: -10%;
    @include mq() {
      height: 7rem;
    }
  }
  section.section {
    margin-top: -2rem;
    margin-bottom: 4rem;
    position: relative;
    @include mq() {
      padding: 0 1rem;
      margin-bottom: 2rem;
    }
    .section__inner {
      max-width: 980px;
      width: 100%;
      margin: 0 auto;
      position: relative;
      .section__title {
        margin-bottom: 4rem;
        @include mq() {
          margin-bottom: 2rem;
        }
        h2.section__en.jos {
          font-size: 4rem;
          letter-spacing: -8px;
          margin-bottom: 0.5rem;
          line-height: 1.1;
          display: inline-block;
          overflow: hidden;
          position: relative;
          width: 125px;
          @include mq() {
            font-size: 4rem;
            margin-bottom: 0;
          }
          &:after {
            content: '';
            clear: both;
            display: table;
          }
          .bk {
            position: absolute;
            top: 0;
            left: 0;
            background: $text-color;
            height: 66px;
          }
          span {
            opacity: 0;
          }
          &.is-active {
            span {
              @for $i from 1 through 12 {
                &:nth-of-type(#{$i}) {
                  animation: 2s textOpacity (random(12) * 0.1s + 1s) forwards;
                }
              }
            }
          }
        }
        h2.section__jp {
          font-size: 14px;
          margin: 0;
          display: inline-block;
          overflow: hidden;
          position: relative;
          letter-spacing: -1.4px;
          width: 56px;
          .bk {
            position: absolute;
            top: 0;
            left: 0;
            background: $text-color;
            height: 18px;
          }
          span {
            opacity: 0;
          }
          &.is-active {
            span {
              @for $i from 1 through 12 {
                &:nth-of-type(#{$i}) {
                  animation: 2s textOpacity (random(12) * 0.1s + 1s) forwards;
                }
              }
            }
          }
        }
      }
    }
  }
}

@keyframes textOpacity {
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
