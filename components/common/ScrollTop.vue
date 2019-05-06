<template>
  <div class="scrollTop">
    <button ref="scrollTopBtn" class="scrollTop__btn" @click="scrollTopAnim()">
      <div class="scrollTop__btnArrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
    <div id="scrollTopMask" ref="scrollTopMask" class="scrollTop__mask">
      <div
        ref="scrollTopMaskArrow"
        class="scrollTop__maskArrow"
        :class="{ 'is-active': showSwitch }"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax, TweenLite, TimelineLite, Expo, Power1 } from 'gsap'
import ScrollToPlugin from 'gsap/umd/ScrollToPlugin'
const plugins = [ScrollToPlugin]

export default {
  data() {
    return {
      showSwitch: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollEvent)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollEvent)
  },
  methods: {
    scrollEvent() {
      const scrollTopBtn = this.$refs.scrollTopBtn
      let scrollTopBtnPosition = scrollTopBtn.getBoundingClientRect().top
      if (
        scrollTopBtnPosition - window.innerHeight < 0 &&
        scrollTopBtn.classList.contains('is-active') !== true
      ) {
        scrollTopBtn.classList.add('is-active')
        const timeLine = new TimelineMax()
        requestAnimationFrame(() => {
          timeLine
            .set(scrollTopBtn, {
              scaleX: 0,
              scaleY: 0,
              width: '4rem',
              height: '4rem',
              transformOrigin: 'center center',
              ease: Expo.easeIn
            })
            .to(scrollTopBtn, 1.6, {
              scaleX: 1.05,
              scaleY: 1.05,
              transformOrigin: 'center center',
              ease: Expo.easeIn
            })
            .to(scrollTopBtn, 0.2, {
              scaleX: 0.95,
              scaleY: 0.95,
              transformOrigin: 'center center',
              ease: Expo.easeIn
            })
            .to(scrollTopBtn, 0.2, {
              scaleX: 1.0,
              scaleY: 1.0,
              transformOrigin: 'center center',
              ease: Expo.easeIn
            })
        })
      }
    },
    scrollTopAnim() {
      const scrollTopMask = this.$refs.scrollTopMask
      const scrollTopMaskArrow = this.$refs.scrollTopMaskArrow
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      TweenLite.to(window, 1.4, {
        scrollTo: { y: 0, autoKill: false },
        ease: Power1.easeOut
      })

      const tlMask = new TimelineLite()
      tlMask
        .fromTo(
          scrollTopMask,
          0.5,
          {
            top: '-100%'
          },
          {
            top: windowWidth > 980 ? '2rem' : '1rem',
            ease: Expo.easeOut,
            onStart: function() {
              scrollTopMask.style.width =
                windowWidth > 980
                  ? windowWidth - 60 + 'px'
                  : windowWidth - 30 + 'px'
              scrollTopMask.style.height =
                windowWidth > 980
                  ? windowHeight - 60 + 'px'
                  : windowHeight - 30 + 'px'
            }
          }
        )
        .to(scrollTopMask, 0.5, {
          top: '100%',
          ease: Expo.easeIn,
          onComplete: function() {
            scrollTopMask.style.width = '0px'
            scrollTopMask.style.height = '0px'
          }
        })

      const tlArrow = new TimelineLite()
      const vm = this
      tlArrow
        .fromTo(
          scrollTopMaskArrow,
          0.5,
          {
            top: '200%'
          },
          {
            top: '50%',
            ease: Expo.easeOut,
            onStart: function() {
              vm.showSwitch = true
            }
          }
        )
        .to(scrollTopMaskArrow, 0.5, {
          top: '-100%',
          ease: Expo.easeIn,
          onComplete: function() {
            vm.showSwitch = false
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.scrollTop {
  .scrollTop__btn {
    border: none;
    position: absolute;
    top: -4.5rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0 8px 15px rgba(123, 138, 147, 0.15);
    cursor: pointer;
    transition: box-shadow 0.4s ease-in;
    opacity: 0;
    &.is-active {
      opacity: 1;
    }
    &:hover {
      box-shadow: 0 10px 20px rgba(123, 138, 147, 0.25);
      transition: box-shadow 0.4s ease-out;
    }
    @include mq() {
      top: -3rem;
      right: 1rem;
    }
    &:focus {
      outline: 0;
    }
  }
  .scrollTop__btnArrow {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.9);
    width: 25px;
    height: 40px;
    span {
      position: absolute;
      &:nth-child(1) {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        width: 1px;
        background: $text-color;
        height: 40px;
        transition: all 0.1s linear 0.1s;
      }
      &:nth-child(2) {
        top: 0;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        transform-origin: top center;
        display: block;
        width: 1px;
        background: $text-color;
        height: 17.6px;
        transition: all 0.1s linear 0.2s;
      }
      &:nth-child(3) {
        width: 25px;
        height: 1px;
        display: block;
        background: $text-color;
        left: 0;
        top: 12px;
        transition: all 0.1s linear 0.3s;
      }
    }
  }
  .scrollTop__mask {
    position: fixed;
    top: -100%;
    left: 2rem;
    background: #232323;
    overflow: hidden;
    z-index: 999;
    width: 0;
    height: 0;
    @include mq() {
      left: 1rem;
    }
  }
  .scrollTop__maskArrow {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 62.5px;
    height: 100px;
    span {
      position: absolute;
      &:nth-child(1) {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        width: 1px;
        background: #fff;
        height: 0px;
        transition: all 0.2s linear 0.1s;
      }
      &:nth-child(2) {
        top: 0;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        transform-origin: top center;
        display: block;
        width: 1px;
        background: #fff;
        height: 0;
        transition: all 0.2s linear 0.3s;
      }
      &:nth-child(3) {
        width: 0;
        height: 1px;
        display: block;
        background: #fff;
        left: 0;
        top: 30px;
        transition: all 0.2s linear 0.5s;
      }
    }
    &.is-active {
      span {
        &:nth-child(1) {
          height: 100px;
        }
        &:nth-child(2) {
          height: 44px;
        }
        &:nth-child(3) {
          width: 62.5px;
        }
      }
    }
  }
}
</style>
