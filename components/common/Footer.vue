<template>
  <footer class="footer">
    <div class="footer__line"></div>
    <div class="footer__copy">
      <p class="jos">
        <span>©</span>
        <span v-for="(text, key) in '2019'" :key="`year-text-${key}`">
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

export default {
  components: {
    IconHeart,
    ScrollTop
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
      letter-spacing: 3px;
      span {
        opacity: 1;
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
</style>
