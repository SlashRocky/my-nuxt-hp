<template>
  <footer id="footer" ref="footer" class="footer">
    <div ref="footerLine" class="footer__line"></div>
    <div class="footer__copy">
      <p class="jos">
        <span>©</span>
        <span v-for="(text, key) in '2020'" :key="`year-text-${key}`">
          {{ text }}
        </span>
        <span
          v-for="(text, key) in 'MasaakiTodoroki'"
          :key="`name-text-${key}`"
        >
          {{ text }}
        </span>
        <span class="heart">
          <IconHeart />
        </span>
      </p>
    </div>
    <ScrollTop />
  </footer>
</template>

<script>
import IconHeart from '~/components/icons/heart.vue'
import ScrollTop from '~/components/common/ScrollTop.vue'
import { TimelineMax, Expo } from 'gsap'

export default {
  components: {
    IconHeart,
    ScrollTop
  },
  mounted() {
    window.addEventListener('scroll', this.scrollEvent)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollEvent)
  },
  methods: {
    scrollEvent() {
      const footer = this.$refs.footer
      const footerLine = this.$refs.footerLine
      let footerPosition = footer.getBoundingClientRect().top
      if (
        footerPosition - window.innerHeight < 0 &&
        footer.classList.contains('is-active') !== true
      ) {
        footer.classList.add('is-active')
        const timeLine = new TimelineMax()
        requestAnimationFrame(() => {
          timeLine
            .to(footerLine, 0.7, {
              scaleX: 1.2,
              width: '120%',
              ease: Expo.easeIn
            })
            .to(footerLine, 1, {
              rotation: -3,
              ease: Back.easeInOut.config(1.5)
            })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
footer.footer {
  padding: 0rem 2rem 4rem;
  position: relative;
  @include mq() {
    padding: 0rem 1rem 2rem;
  }
  &.is-active {
    .scrollTop {
      button.scrollTop__button {
        animation: scrollButton 0.7s linear 1s forwards;
      }
    }
    .footer__copy {
      p {
        span {
          @for $i from 1 through 23 {
            &:nth-of-type(#{$i}) {
              animation: 2s textOpacity (random(23) * 0.1s) forwards;
            }
          }
        }
      }
    }
  }
  .footer__line {
    margin-bottom: 6rem;
    width: 0%;
    height: 1px;
    background: #eaeaea;
    margin-left: -10%;
    @include mq() {
      margin-bottom: 3rem;
    }
  }
  .scrollTop__btn {
    transform: scale(0);
  }
  .footer__copy {
    p {
      text-align: right;
      letter-spacing: 2px;
      span {
        opacity: 0;
        display: inline-block;
        &.heart {
          vertical-align: sub;
          svg {
            height: 16px;
            fill: #fe5196;
            animation: heart 2s linear infinite;
          }
        }
      }
    }
  }
}

@keyframes heart {
  0% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(0.8);
  }
  to {
    transform: scale(1.1);
  }
}

@keyframes scrollButon {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.1);
  }
  90% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
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
