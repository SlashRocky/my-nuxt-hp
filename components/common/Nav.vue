<template>
  <div class="nav">
    <div
      id="navMask"
      class="nav__mask"
      :class="{ 'is-show': showSwitch, 'is-active': openedNav }"
    >
      <LogoNav />
      <span v-for="n in 8" :key="`nav-mask-line=${n}`" class="nav__mask__line">
      </span>
      <span class="nav__mask__around-line nav__mask__around-line--01">
        <span class="nav__mask__around-line__grad"></span>
      </span>
      <span class="nav__mask__around-line nav__mask__around-line--02">
        <span class="nav__mask__around-line__grad"></span>
      </span>
      <span class="nav__mask__around-line nav__mask__around-line--03">
        <span class="nav__mask__around-line__grad"></span>
      </span>
      <span class="nav__mask__around-line nav__mask__around-line--04">
        <span class="nav__mask__around-line__grad"></span>
      </span>
      <nav id="navLists" class="nav__lists">
        <ul class="jos">
          <li class="nav__list">
            <nuxt-link
              id="navLink01"
              to="/"
              class="nav__link nav__link--01"
              @click.native="click"
            >
              <span
                id="navContainer01"
                class="nav__container nav__container--01"
              >
                <span id="navTxt01" class="nav__txt nav__txt--01">
                  <span v-for="(text, key) in 'Home'" :key="`home-text-${key}`">
                    {{ text }}
                  </span>
                </span>
                <span ref="navTxtBk01" class="nav__txt__bk"></span>
              </span>
            </nuxt-link>
          </li>
          <li class="nav__list">
            <nuxt-link
              id="navLink02"
              to="/about/"
              class="nav__link nav__link--02"
              @click.native="click"
            >
              <span
                id="navContainer02"
                class="nav__container nav__container--02"
              >
                <span id="navTxt02" class="nav__txt nav__txt--02">
                  <span
                    v-for="(text, key) in 'About'"
                    :key="`about-text-${key}`"
                  >
                    {{ text }}
                  </span>
                </span>
                <span ref="navTxtBk02" class="nav__txt__bk"></span>
              </span>
            </nuxt-link>
          </li>
          <li class="nav__list">
            <nuxt-link
              id="navLink03"
              to="/blog/posts/1"
              class="nav__link nav__link--03"
              @click.native="click"
            >
              <span
                id="navContainer03"
                class="nav__container nav__container--03"
              >
                <span id="navTxt03" class="nav__txt nav__txt--03">
                  <span v-for="(text, key) in 'Blog'" :key="`blog-text-${key}`">
                    {{ text }}
                  </span>
                </span>
                <span ref="navTxtBk03" class="nav__txt__bk"></span>
              </span>
            </nuxt-link>
          </li>
          <li class="nav__list">
            <a
              id="navLink04"
              href="http://urx2.nu/VpGk"
              target="_blank"
              class="nav__link nav__link--04"
            >
              <span
                id="navContainer04"
                class="nav__container nav__container--04"
              >
                <span id="navTxt04" class="nav__txt nav__txt--04">
                  <span
                    v-for="(text, key) in 'Contact'"
                    :key="`contact-text-${key}`"
                  >
                    {{ text }}
                  </span>
                </span>
                <span ref="navTxtBk04" class="nav__txt__bk"></span>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <button
      id="navButton"
      class="nav__button"
      :class="{ 'is-show is-show2': showSwitch, 'is-active': openedNav }"
      @click="click"
    >
      <span class="nav__button__line">
        <span class="nav__button__line__grad"></span>
      </span>
      <span class="nav__button__line">
        <span class="nav__button__line__grad"></span>
      </span>
      <span class="nav__button__line">
        <span class="nav__button__line__grad"></span>
      </span>
      <span ref="navButtonBk" class="nav__button__bk"></span>
    </button>
  </div>
</template>

<script>
import LogoNav from '~/components/common/LogoNav'
import { mapGetters, mapMutations } from 'vuex'
import { TimelineMax, TimelineLite, Expo } from 'gsap'

export default {
  components: {
    LogoNav
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
    async loadedIndex() {
      this.navButtonBkAnim()
      await this.$_delay(2000)
      this.showSwitch = true
    },
    async loadedAbout() {
      await this.$_delay(3000)
      this.navButtonBkAnim()
      await this.$_delay(2000)
      this.showSwitch = true
    },
    async loadedPosts(val) {
      if (val) {
        this.addCurrentClassToBlog()
        await this.$_delay(3000)
        this.navButtonBkAnim()
        await this.$_delay(2000)
        this.showSwitch = true
      } else {
        this.removeCurrentClassFromBlog()
      }
    },
    async loadedPost(val) {
      if (val) {
        this.addCurrentClassToBlog()
        await this.$_delay(3000)
        this.navButtonBkAnim()
        await this.$_delay(2000)
        this.showSwitch = true
      } else {
        this.removeCurrentClassFromBlog()
      }
    },
    async loadedCategories(val) {
      if (val) {
        this.addCurrentClassToBlog()
        await this.$_delay(3000)
        this.navButtonBkAnim()
        await this.$_delay(2000)
        this.showSwitch = true
      } else {
        this.removeCurrentClassFromBlog()
      }
    },
    async loadedCategoriesSlug(val) {
      if (val) {
        this.addCurrentClassToBlog()
        await this.$_delay(3000)
        this.navButtonBkAnim()
        await this.$_delay(2000)
        this.showSwitch = true
      } else {
        this.removeCurrentClassFromBlog()
      }
    },
    async openedNav(val) {
      if (val) {
        this.navTxtBk01AnimStart()
        await this.$_delay(200)
        this.navTxtBk02AnimStart()
        await this.$_delay(200)
        this.navTxtBk03AnimStart()
        await this.$_delay(200)
        this.navTxtBk04AnimStart()
      } else {
        this.navTxtBk01AnimSop()
        this.navTxtBk02AnimSop()
        this.navTxtBk03AnimSop()
        this.navTxtBk04AnimSop()
      }
    }
  },
  methods: {
    ...mapMutations({
      click: 'click'
    }),
    navButtonBkAnim() {
      const timeLine = new TimelineMax()
      requestAnimationFrame(() => {
        timeLine
          .set(this.$refs.navButtonBk, {
            scaleX: 0,
            transformOrigin: 'right center',
            ease: Expo.easeIn
          })
          .to(this.$refs.navButtonBk, 1, {
            scaleX: 1,
            width: '100%',
            ease: Expo.easeIn
          })
          .to(this.$refs.navButtonBk, 1, {
            scaleX: 0,
            transformOrigin: 'left center',
            ease: Expo.easeIn
          })
      })
    },
    navTxtBk01AnimStart() {
      const navTxtBk01 = this.$refs.navTxtBk01
      const tlNavTxtBk01 = new TimelineLite()
      tlNavTxtBk01
        .fromTo(
          navTxtBk01,
          0.4,
          {
            width: 0,
            height: '1px',
            x: '-150px',
            y: '-50%'
          },
          {
            width: '81px',
            height: '1px',
            x: '0%',
            y: '-50%',
            ease: Expo.easeOut,
            delay: 0.8
          }
        )
        .to(navTxtBk01, 0.7, {
          height: '24px',
          ease: Expo.easeOut,
          onComplete: function() {
            document.getElementById('navContainer01').classList.add('is-active')
            document.getElementById('navTxt01').classList.add('is-active')
          }
        })
        .to(navTxtBk01, 0.7, {
          x: '101%',
          ease: Expo.easeOut,
          onComplete: function() {
            document.getElementById('navLink01').classList.add('is-active')
            navTxtBk01.removeAttribute('style')
            document
              .getElementById('navContainer01')
              .classList.remove('is-active')
          }
        })
    },
    navTxtBk02AnimStart() {
      const navTxtBk02 = this.$refs.navTxtBk02
      const tlNavTxtBk02 = new TimelineLite()
      tlNavTxtBk02
        .fromTo(
          navTxtBk02,
          0.4,
          {
            width: 0,
            height: '1px',
            x: '-150px',
            y: '-50%'
          },
          {
            width: '88px',
            height: '1px',
            x: '0%',
            y: '-50%',
            ease: Expo.easeOut,
            delay: 0.8
          }
        )
        .to(navTxtBk02, 0.7, {
          height: '24px',
          ease: Expo.easeOut,
          onComplete: function() {
            document.getElementById('navContainer02').classList.add('is-active')
            document.getElementById('navTxt02').classList.add('is-active')
          }
        })
        .to(navTxtBk02, 0.7, {
          x: '101%',
          ease: Expo.easeOut,
          onComplete: function() {
            document.getElementById('navLink02').classList.add('is-active')
            navTxtBk02.removeAttribute('style')
            document
              .getElementById('navContainer02')
              .classList.remove('is-active')
          }
        })
    },
    navTxtBk03AnimStart() {
      const navTxtBk03 = this.$refs.navTxtBk03
      const tlNavTxtBk03 = new TimelineLite()
      tlNavTxtBk03
        .fromTo(
          navTxtBk03,
          0.4,
          {
            width: 0,
            height: '1px',
            x: '-150px',
            y: '-50%'
          },
          {
            width: '61px',
            height: '1px',
            x: '0%',
            y: '-50%',
            ease: Expo.easeOut,
            delay: 0.8
          }
        )
        .to(navTxtBk03, 0.7, {
          height: '24px',
          ease: Expo.easeOut,
          onComplete: function() {
            document.getElementById('navContainer03').classList.add('is-active')
            document.getElementById('navTxt03').classList.add('is-active')
          }
        })
        .to(navTxtBk03, 0.7, {
          x: '101%',
          ease: Expo.easeOut,
          onComplete: function() {
            document.getElementById('navLink03').classList.add('is-active')
            navTxtBk03.removeAttribute('style')
            document
              .getElementById('navContainer03')
              .classList.remove('is-active')
          }
        })
    },
    navTxtBk04AnimStart() {
      const navTxtBk04 = this.$refs.navTxtBk04
      const tlNavTxtBk04 = new TimelineLite()
      tlNavTxtBk04
        .fromTo(
          navTxtBk04,
          0.4,
          {
            width: 0,
            height: '1px',
            x: '-150px',
            y: '-50%'
          },
          {
            width: '116px',
            height: '1px',
            x: '0%',
            y: '-50%',
            ease: Expo.easeOut,
            delay: 0.8
          }
        )
        .to(navTxtBk04, 0.7, {
          height: '24px',
          ease: Expo.easeOut,
          onComplete: function() {
            document.getElementById('navContainer04').classList.add('is-active')
            document.getElementById('navTxt04').classList.add('is-active')
          }
        })
        .to(navTxtBk04, 0.7, {
          x: '101%',
          ease: Expo.easeOut,
          onComplete: function() {
            document.getElementById('navLink04').classList.add('is-active')
            navTxtBk04.removeAttribute('style')
            document
              .getElementById('navContainer04')
              .classList.remove('is-active')
          }
        })
    },
    navTxtBk01AnimSop() {
      const navTxt01 = document.getElementById('navTxt01')
      navTxt01.classList.remove('is-active')
      const navLink01 = document.getElementById('navLink01')
      navLink01.classList.remove('is-active')
    },
    navTxtBk02AnimSop() {
      const navTxt02 = document.getElementById('navTxt02')
      navTxt02.classList.remove('is-active')
      const navLink02 = document.getElementById('navLink02')
      navLink02.classList.remove('is-active')
    },
    navTxtBk03AnimSop() {
      const navTxt03 = document.getElementById('navTxt03')
      navTxt03.classList.remove('is-active')
      const navLink03 = document.getElementById('navLink03')
      navLink03.classList.remove('is-active')
    },
    navTxtBk04AnimSop() {
      const navTxt04 = document.getElementById('navTxt04')
      navTxt04.classList.remove('is-active')
      const navLink04 = document.getElementById('navLink04')
      navLink04.classList.remove('is-active')
    },
    addCurrentClassToBlog() {
      const navLink03 = document.getElementById('navLink03')
      navLink03.classList.add('is-current', 'nuxt-link-exact-active')
    },
    removeCurrentClassFromBlog() {
      const navLink03 = document.getElementById('navLink03')
      navLink03.classList.remove('is-current', 'nuxt-link-exact-active')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  .nav__mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    visibility: hidden;
    z-index: 10;
    &.is-show {
      background: #111111;
    }
    &.is-active {
      visibility: visible;
      span.nav__mask__line {
        transform: translateX(0);
      }
      span.nav__mask__around-line {
        overflow: hidden;
        &--01 {
          width: calc(100% - 8.84rem);
          @include mq() {
            width: calc(100% - 6.84rem);
          }
          span.nav__mask__around-line__grad {
            width: 100%;
            height: 1px;
            transform: translateX(100%);
            animation: 16s maskAroundLine1 2s linear infinite;
          }
        }
        &--02 {
          height: calc(100% - 5.6rem);
          @include mq() {
            height: calc(100% - 3.6rem);
          }
          span.nav__mask__around-line__grad {
            width: 1px;
            height: 100%;
            transform: translateY(-100%);
            animation: 16s maskAroundLine2 2s linear infinite;
          }
        }
        &--03 {
          width: calc(100% - 6.56rem);
          @include mq() {
            width: calc(100% - 4.56rem);
          }
          span.nav__mask__around-line__grad {
            width: 100%;
            height: 1px;
            transform: translateX(-100%);
            animation: 16s maskAroundLine3 2s linear infinite;
          }
        }
        &--04 {
          height: calc(100% - 7.4rem);
          @include mq() {
            height: calc(100% - 5.4rem);
          }
          span.nav__mask__around-line__grad {
            width: 1px;
            height: 100%;
            transform: translateY(100%);
            animation: 16s maskAroundLine4 2s linear infinite;
          }
        }
        span.nav__mask__around-line__grad {
          display: block;
          background: #f093fb;
        }
      }
    }
    span.nav__mask__line {
      width: 100%;
      height: calc(100vh / 8);
      background: #111111;
      display: block;
      transform: translateX(-100%);
      position: relative;
      padding: 0;
      @for $i from 1 through 8 {
        &:nth-of-type(#{$i}) {
          transition: all 0.15s ease-out (random(8) * 0.015s);
        }
      }
    }
    span.nav__mask__around-line {
      position: absolute;
      display: block;
      background: #fff;
      z-index: 12;
      &--01 {
        width: 0;
        height: 1px;
        top: 2.8rem;
        right: 5.56rem;
        transition: all 0.1s ease-in 0.3s;
        @include mq() {
          right: 4.56rem;
          top: 1.8rem;
        }
      }
      &--02 {
        width: 1px;
        height: 0;
        top: 2.8rem;
        left: 3.28rem;
        transition: all 0.1s linear 0.4s;
        @include mq() {
          top: 1.8rem;
          left: 2.28rem;
        }
      }
      &--03 {
        width: 0;
        height: 1px;
        bottom: 2.8rem;
        left: 3.28rem;
        transition: all 0.1s linear 0.5s;
        @include mq() {
          bottom: 1.8rem;
          left: 2.28rem;
        }
      }
      &--04 {
        width: 1px;
        height: 0;
        bottom: 2.8rem;
        right: 3.28rem;
        transition: all 0.1s ease-out 0.6s;
        @include mq() {
          bottom: 1.8rem;
          right: 2.28rem;
        }
      }
    }
    nav.nav__lists {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 6.28rem;
      z-index: 11;
      @include mq() {
        left: 4.28rem;
      }
      ul {
        list-style: none;
        padding-left: 0;
        li.nav__list {
          margin-bottom: 1.5rem;
          &:last-child {
            margin-bottom: 0;
          }
          a.nav__link {
            color: #ffffff;
            text-decoration: none;
            font-size: 24px;
            font-weight: 300;
            letter-spacing: -1px;
            line-height: 1;
            position: relative;
            display: block;
            @include mq() {
              font-size: 21px;
            }
            &--01 {
              &.nuxt-link-exact-active {
                &.is-active {
                  &.is-current {
                    &:before {
                      animation: 0.4s navCurrent01 0.4s ease-out forwards;
                    }
                  }
                }
              }
            }
            &--02 {
              &.nuxt-link-exact-active {
                &.is-active {
                  &.is-current {
                    &:before {
                      animation: 0.4s navCurrent02 0.2s ease-out forwards;
                    }
                  }
                }
              }
            }
            &--03 {
              &.nuxt-link-exact-active {
                &.is-active {
                  &.is-current {
                    &:before {
                      animation: 0.4s navCurrent03 0s ease-out forwards;
                    }
                  }
                }
              }
            }
            &--04 {
              &.nuxt-link-exact-active {
                &.is-active {
                  &.is-current {
                    &:before {
                      animation: 0.4s navCurrent04 0s ease-out forwards;
                    }
                  }
                }
              }
            }
            &:before {
              content: '';
              display: block;
              width: 300%;
              height: 1px;
              position: absolute;
              top: 50%;
              right: 300%;
              transform: translateY(-3px);
              background: #ffffff;
            }
            &--01 {
              &:hover {
                &:before {
                  animation: 0.4s navCurrent01 0s ease-out forwards;
                }
              }
            }
            &--02 {
              &:hover {
                &:before {
                  animation: 0.4s navCurrent02 0s ease-out forwards;
                }
              }
            }
            &--03 {
              &:hover {
                &:before {
                  animation: 0.4s navCurrent03 0s ease-out forwards;
                }
              }
            }
            &--04 {
              &:hover {
                &:before {
                  animation: 0.4s navCurrent04 0s ease-out forwards;
                }
              }
            }
            span.nav__container {
              position: relative;
              display: block;
              &--01 {
                width: 81px;
              }
              &--02 {
                width: 88px;
              }
              &--03 {
                width: 61px;
              }
              &--04 {
                width: 116px;
              }
              &.is-active {
                overflow: hidden;
              }
              span.nav__txt {
                display: inline-block;
                span {
                  opacity: 0;
                }
                &--01 {
                  &.is-active {
                    span {
                      @for $i from 1 through 4 {
                        &:nth-of-type(#{$i}) {
                          animation: 1s navTxt (random(4) * 0.1s) forwards;
                        }
                      }
                    }
                  }
                }
                &--02 {
                  &.is-active {
                    span {
                      @for $i from 1 through 5 {
                        &:nth-of-type(#{$i}) {
                          animation: 1s navTxt (random(5) * 0.1s) forwards;
                        }
                      }
                    }
                  }
                }
                &--03 {
                  &.is-active {
                    span {
                      @for $i from 1 through 4 {
                        &:nth-of-type(#{$i}) {
                          animation: 1s navTxt (random(4) * 0.1s) forwards;
                        }
                      }
                    }
                  }
                }
                &--04 {
                  &.is-active {
                    span {
                      @for $i from 1 through 7 {
                        &:nth-of-type(#{$i}) {
                          animation: 1s navTxt (random(7) * 0.1s) forwards;
                        }
                      }
                    }
                  }
                }
              }
              span.nav__txt__bk {
                display: block;
                background-color: #ffffff;
                position: absolute;
                top: 50%;
              }
            }
          }
        }
      }
    }
  }
  button.nav__button {
    position: fixed;
    z-index: 11;
    right: 2rem;
    top: 2rem;
    display: block;
    outline: none;
    border: none;
    background: transparent;
    width: 2.56rem;
    height: 1.6rem;
    display: block;
    padding: 0;
    cursor: pointer;
    transition: all 0.4s ease-out;
    @include mq() {
      right: 1rem;
      top: 1rem;
    }
    span.nav__button__bk {
      background: $text-color;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      height: 24px;
    }
    &.is-show {
      span.nav__button__line {
        &:nth-child(1) {
          animation: 0.3s buttonLineShow 0s linear forwards;
        }
        &:nth-child(2) {
          animation: 0.3s buttonLineShow 0.3s linear forwards;
        }
        &:nth-child(3) {
          animation: 0.3s buttonLineShow 0.6s linear forwards;
        }
      }
    }
    &.is-show2 {
      span.nav__button__line {
        span.nav__button__line__grad {
          width: 200%;
          transform: translateX(50%);
        }
        &:nth-child(1) {
          span.nav__button__line__grad {
            animation: buttonLine 2s Linear 0.1s infinite;
          }
        }
        &:nth-child(2) {
          span.nav__button__line__grad {
            animation: buttonLine 2s Linear 0.2s infinite;
          }
        }
        &:nth-child(3) {
          span.nav__button__line__grad {
            animation: buttonLine 2s Linear 0.3s infinite;
          }
        }
      }
    }
    &.is-active {
      transform: translate(0%, 0%);
      span.nav__button__line {
        background: #ffffff;
        &:nth-child(1) {
          top: 11px;
          transform: rotate(45deg);
          @include mq() {
            top: 10px;
          }
        }
        &:nth-child(2) {
          transform: translate(-100%, -50%);
          opacity: 0;
        }
        &:nth-child(3) {
          bottom: 11px;
          transform: rotate(-45deg);
          @include mq() {
            bottom: 11px;
          }
        }
        span.nav__button__line__grad {
          display: none;
        }
      }
    }
    span.nav__button__line {
      width: 0;
      height: 1px;
      display: block;
      background: $text-color;
      position: absolute;
      overflow: hidden;
      right: 0;
      &:nth-child(1) {
        top: 0px;
        transition: all 0.4s;
      }
      &:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
        transition: all 0.4s ease-out;
      }
      &:nth-child(3) {
        bottom: 0;
        transition: all 0.4s;
      }
      span.nav__button__line__grad {
        width: 0%;
        height: 1px;
        display: block;
        will-change: transform;
        background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
      }
    }
  }
}

@keyframes buttonLineShow {
  100% {
    width: 100%;
  }
}

@keyframes buttonLine {
  0% {
    transform: translateX(100%);
  }
  80% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes maskAroundLine1 {
  0% {
    transform: translateX(100%);
  }
  25% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(-100%);
  }
  75% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes maskAroundLine2 {
  0% {
    transform: translateY(-100%);
  }
  25% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(100%);
  }
  75% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(100%);
  }
}

@keyframes maskAroundLine3 {
  0% {
    transform: translateX(-100%);
  }
  25% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(-100%);
  }
  75% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes maskAroundLine4 {
  0% {
    transform: translateY(100%);
  }
  25% {
    transform: translateY(100%);
  }
  50% {
    transform: translateY(100%);
  }
  75% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}

@keyframes navCurrent01 {
  100% {
    right: 35%;
  }
}

@keyframes navCurrent02 {
  100% {
    right: 30%;
  }
}

@keyframes navCurrent03 {
  100% {
    right: 50%;
  }
}

@keyframes navCurrent04 {
  100% {
    right: -5%;
  }
}

@keyframes navTxt {
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
