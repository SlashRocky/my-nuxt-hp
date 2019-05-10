<template>
  <div id="loading">
    <div id="loadingMask" class="loading__mask"></div>
    <div id="loadingBack" class="loading__back">
      <div
        v-for="n in 40"
        :key="`loading-element-${n}`"
        class="loading__element"
      ></div>
    </div>
    <div id="loadingFront" class="loading__front">
      <div class="loading__logo">
        <LoadingLogo />
      </div>
    </div>
  </div>
</template>

<script>
import LoadingLogo from '~/components/common/LoadingLogo.vue'

export default {
  components: {
    LoadingLogo
  },
  methods: {
    start() {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const loadingMask = document.getElementById('loadingMask')
      loadingMask.classList.add('is-active')
      loadingMask.style.height = windowHeight + 'px'
    },
    finish() {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const loadingMask = document.getElementById('loadingMask')
      setTimeout(() => {
        loadingMask.classList.remove('is-active')
        loadingMask.style.height = '0px'
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
#loading {
  .loading__mask {
    width: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 997;
    background: #ffffff;
    &.is-active {
      width: 100%;
    }
  }
  .loading__back {
    position: fixed;
    z-index: 998;
    div {
      @for $i from 1 through 40 {
        &:nth-of-type(#{$i}) {
          position: fixed;
          @if $i < 6 {
            top: 0;
            left: ($i - 1) * 10%;
            @include mq() {
              left: ($i - 1) * 20%;
            }
          } @else if $i < 11 {
            top: 0;
            left: ($i - 1) * 10%;
            @include mq() {
              display: none;
            }
          } @else if $i < 16 {
            top: 25%;
            left: (($i - 10) - 1) * 10%;
            @include mq() {
              left: (($i - 10) - 1) * 20%;
            }
          } @else if $i < 21 {
            top: 25%;
            left: (($i - 10) - 1) * 10%;
            @include mq() {
              display: none;
            }
          } @else if $i < 26 {
            top: 50%;
            left: (($i - 20) - 1) * 10%;
            @include mq() {
              left: (($i - 20) - 1) * 20%;
            }
          } @else if $i < 31 {
            top: 50%;
            left: (($i - 20) - 1) * 10%;
            @include mq() {
              display: none;
            }
          } @else if $i < 36 {
            top: 75%;
            left: (($i - 30) - 1) * 10%;
            @include mq() {
              display: none;
            }
          } @else if $i < 41 {
            top: 75%;
            left: (($i - 30) - 1) * 10%;
            @include mq() {
              display: none;
            }
          }
          width: calc(100% / 10);
          @include mq() {
            width: calc(100% / 5);
          }
          height: 25vh;
          background: $text-color;
          opacity: 0;
          visibility: hidden;
        }
      }
    }
  }
  .loading__front {
    position: fixed;
    z-index: 999;
    top: 2rem;
    left: 2rem;
    overflow: hidden;
    transform: translateX(-120%);
    @include mq() {
      top: 1rem;
      left: 2rem;
    }
    .loading__logo {
      width: 100%;
      height: 100%;
      background: #ffffff;
      #loadingLogo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
