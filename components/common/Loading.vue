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
import { TweenMax, TweenLite, Expo } from 'gsap'

export default {
  components: {
    LoadingLogo
  },
  methods: {
    start() {
      const vm = this
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      const loadingMask = document.getElementById('loadingMask')
      loadingMask.classList.add('is-active')
      loadingMask.style.height = windowHeight + 'px'

      const loadingBack = document.getElementById('loadingBack')
      TweenMax.fromTo(
        loadingBack,
        1,
        {
          x: '-100%',
          width: '100%'
        },
        {
          x: '0%',
          width: '100%',
          ease: Expo.easeInOut,
          onStart: function() {
            loadingBack.style.background = '#ffffff'
            loadingBack.style.width = '0px'
            loadingBack.style.height = windowHeight + 'px'
          }
        }
      )

      const loadingElements = document.getElementsByClassName(
        'loading__element'
      )
      for (let i = 0, l = loadingElements.length; i < l; i++) {
        let loadingElement = loadingElements[i]
        TweenLite.fromTo(
          loadingElement,
          1,
          {
            opacity: 0,
            visibility: 'hidden',
            rotation: 0
          },
          {
            opacity: 1,
            visibility: 'visible',
            rotation: 180
          }
        )
      }

      const loadingFront = document.getElementById('loadingFront')
      TweenMax.fromTo(
        loadingFront,
        1,
        {
          x: '-100%',
          width: 0
        },
        {
          x: '0%',
          width:
            windowWidth > 980
              ? windowWidth - 60 + 'px'
              : windowWidth - 30 + 'px',
          ease: Expo.easeInOut,
          delay: 0.2,
          onStart: function() {
            loadingFront.style.width = '0px'
            loadingFront.style.height =
              windowWidth > 980
                ? windowHeight - 60 + 'px'
                : windowHeight - 30 + 'px'
            vm.loadingLogoAnim()
          }
        }
      )
    },
    finish() {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const loadingMask = document.getElementById('loadingMask')
      const loadingBack = document.getElementById('loadingBack')
      setTimeout(() => {
        loadingMask.classList.remove('is-active')
        loadingMask.style.height = '0px'

        loadingBack.style.background = '#232323'
        TweenMax.fromTo(
          loadingBack,
          1,
          {
            left: '0%',
            width: '100%'
          },
          {
            left: '100%',
            width: 0,
            ease: Expo.easeOut,
            delay: 0.2,
            onComplete: function() {
              loadingBack.style.left = '0px'
            }
          }
        )

        TweenMax.fromTo(
          loadingFront,
          1,
          {
            left: '0%',
            width:
              windowWidth > 980
                ? windowWidth - 60 + 'px'
                : windowWidth - 30 + 'px'
          },
          {
            left: '120%',
            width: 0,
            ease: Expo.easeOut,
            onComplete: function() {
              loadingFront.style.left = windowWidth > 980 ? '30px' : '15px'
            }
          }
        )
      }, 3000)
    },
    loadingLogoAnim() {
      const logo = document.getElementById('logo')
      let paths = []
      Array.prototype.slice
        .call(logo.querySelectorAll('path'))
        .forEach((path, i) => {
          paths[i] = path
          paths[i].classList.remove('logo__line--active')
        })
      logo.classList.remove('logo--active')

      let j = 0
      setTimeout(loadingLogoStrokeAnim, 600)
      function loadingLogoStrokeAnim() {
        const logoTicker = setInterval(() => {
          paths[j].classList.add('logo__line--active')
          j++
          if (paths.length === j) {
            clearInterval(logoTicker)
            setTimeout(() => {
              logo.classList.add('logo--active')
            }, 200)
          }
        }, 200)
      }
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
              left: (($i - 30) - 1) * 20%;
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
