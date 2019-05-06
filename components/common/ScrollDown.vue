<template>
  <div class="scrollDown">
    <div class="scrollDown__text" :class="{ 'is-active': showSwitch }">
      <p>
        <span v-for="(text, key) in 'scroll'" :key="`scroll-text-${key}`">
          {{ text }}
        </span>
      </p>
    </div>
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
      loadedAbout: 'loadedAbout'
    })
  },
  watch: {
    async loadedAbout() {
      await this.$_delay(6000)
      this.showSwitch = true
    }
  }
}
</script>

<style lang="scss" scoped>
.scrollDown {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translate(-50%, 0);
  .scrollDown__text {
    p {
      font-weight: 200;
      color: #999999;
      font-style: italic;
      font-size: 12px;
      letter-spacing: -0.075rem;
      span {
        opacity: 0;
      }
    }
    &.is-active {
      span {
        @for $i from 1 through 6 {
          &:nth-of-type(#{$i}) {
            animation: 1s scrollText ((random(6) * 0.1s)) forwards;
          }
        }
      }
    }
  }
}

@keyframes scrollText {
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
