<template>
  <div class="nav">
    <div id="navMask" class="nav__mask">
      <LogoNav />
      <span v-for="n in 8" :key="`nav-mask-line=${n}`" class="nav__mask__line">
      </span>
      <span class="nav__mask-around-line nav__mask__around-line--01">
        <span class="nav__mask__around-line__grad"></span>
      </span>
      <span class="nav__mask__around-line nav__mask-around-line--02">
        <span class="nav__mask__around-line__grad"></span>
      </span>
      <span class="nav__mask__around-line nav__mask-around-line--03">
        <span class="nav__mask__around-line__grad"></span>
      </span>
      <span class="nav__mask__around-line nav__mask-around-line--04">
        <span class="nav__mask__around-line__grad"></span>
      </span>
      <nav id="navLists" class="nav__lists">
        <ul class="jos">
          <li class="nav__list">
            <nuxt-link to="/" class="nav__link">
              <span class="nav__container">
                <span class="nav__txt">
                  <span v-for="(text, key) in 'Home'" :key="`home-text-${key}`">
                    {{ text }}
                  </span>
                </span>
                <span class="nav__txt__bk"></span>
              </span>
            </nuxt-link>
          </li>
          <li class="nav__list">
            <nuxt-link to="/about/" class="nav__link">
              <span class="nav__container">
                <span class="nav__txt">
                  <span
                    v-for="(text, key) in 'About'"
                    :key="`about-text-${key}`"
                  >
                  </span>
                </span>
                <span class="nav__txt__bk"></span>
              </span>
            </nuxt-link>
          </li>
          <li class="nav__list">
            <a href="http://urx2.nu/VpGk" target="_blank" class="nav__link">
              <span class="nav__container">
                <span class="nav__txt">
                  <span
                    v-for="(text, key) in 'Contanct'"
                    :key="`contact-text-${key}`"
                  >
                  </span>
                  <span class="nav__txt__bk"></span>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <button id="navButton" class="nav__button" @click="click">
      <span class="nav__button__line">
        <span class="nav__button__line__grad"></span>
      </span>
      <span class="nav__button__line">
        <span class="nav__button__line__grad"></span>
      </span>
      <span class="nav__button__line">
        <span class="nav__button__line__grad"></span>
      </span>
      <span class="nav__button__bk"></span>
    </button>
  </div>
</template>

<script>
import LogoNav from '~/components/common/LogoNav'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    LogoNav
  },
  computed: {
    ...mapGetters({
      openedNav: 'openedNav'
    })
  },
  methods: {
    ...mapMutations({
      click: 'click'
    })
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
    visibility: hidden;
    z-index: 10;
    span.nav__mask__line {
      width: 100%;
      background: #111111;
      display: block;
      transform: translateX(-100%);
      position: relative;
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
      transition: translateY(-50%);
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
            color: #fff;
            text-decoration: none;
            font-size: 24px;
            font-weight: 300;
            letter-spacing: 5px;
            line-height: 1;
            position: relative;
            display: block;
            @include mq() {
              font-size: 21px;
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
              background: #fff;
            }
            &:hover {
              &:before {
                animation: 0.4s navCurrent 0s ease-out forwards;
              }
            }
            span.nav__container {
              position: relative;
              display: block;
              span.nav__txt {
                display: inline-block;
                span {
                  opacity: 1;
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

@keyframes navCurrent {
  100% {
    right: 0;
  }
}
</style>
