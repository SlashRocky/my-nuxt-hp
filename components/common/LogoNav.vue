<template>
  <svg
    id="navLogo"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 400 400"
    xml:space="preserve"
  >
    <g id="m" transform="translate(54.764176, 0.000000)">
      <path
        id="m1"
        ref="m1"
        d="M221.885824,0 L0.465824355,380"
        class="navLogo__path navLogo__path--01"
      />
      <path
        id="m2"
        ref="m2"
        d="M221.885824,0 L221.885824,180"
        class="navLogo__path navLogo__path--02"
      />
      <path
        id="m3"
        ref="m3"
        d="M325.235824,0 L221.885824,180"
        class="navLogo__path navLogo__path--03"
      />
      <path
        id="m4"
        ref="m4"
        d="M325.235824,0 L325.235824,180"
        class="navLogo__path navLogo__path--04"
      />
    </g>
    <g id="t" transform="translate(0.000000, 198.911822)">
      <path
        id="t1"
        ref="t1"
        d="M0,1.08817778 L380,1.08817778"
        class="navLogo__path navLogo__path--05"
      />
      <path
        id="t2"
        ref="t2"
        d="M190,1.08817778 L87.36,181.088178"
        class="navLogo__path navLogo__path--06"
      />
    </g>
  </svg>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      openedNav: 'openedNav'
    })
  },
  watch: {
    async openedNav(val) {
      if (val) {
        this.animStopM01()
        this.animStopM02()
        this.animStopM03()
        this.animStopM04()
        this.animStopT01()
        this.animStopT02()
        await this.$_delay(1500)
        this.animStartM01()
        this.animStartM03()
        this.animStartT02()
        await this.$_delay(750)
        this.animStartM02()
        this.animStartM04()
        await this.$_delay(750)
        this.animStartT01()
      }
    }
  },
  methods: {
    animStartM01() {
      const m1 = this.$refs.m1
      m1.classList.add('navLogo--active')
    },
    animStartM02() {
      const m2 = this.$refs.m2
      m2.classList.add('navLogo--active')
    },
    animStartM03() {
      const m3 = this.$refs.m3
      m3.classList.add('navLogo--active')
    },
    animStartM04() {
      const m4 = this.$refs.m4
      m4.classList.add('navLogo--active')
    },
    animStartT01() {
      const t1 = this.$refs.t1
      t1.classList.add('navLogo--active')
    },
    animStartT02() {
      const t2 = this.$refs.t2
      t2.classList.add('navLogo--active')
    },
    animStopM01() {
      const m1 = this.$refs.m1
      m1.classList.remove('navLogo--active')
    },
    animStopM02() {
      const m2 = this.$refs.m2
      m2.classList.remove('navLogo--active')
    },
    animStopM03() {
      const m3 = this.$refs.m3
      m3.classList.remove('navLogo--active')
    },
    animStopM04() {
      const m4 = this.$refs.m4
      m4.classList.remove('navLogo--active')
    },
    animStopT01() {
      const t1 = this.$refs.t1
      t1.classList.remove('navLogo--active')
    },
    animStopT02() {
      const t2 = this.$refs.t2
      t2.classList.remove('navLogo--active')
    }
  }
}
</script>

<style lang="scss" scoped>
#navLogo {
  position: absolute;
  stroke: #333;
  stroke-width: 1.5px;
  top: 9%;
  right: 5%;
  height: 90vh;
  z-index: 11;
  path.navLogo__path {
    &--01 {
      stroke-width: 1.5px;
      opacity: 0;
      stroke-dasharray: 439.80316162109375, 439.80316162109375;
      stroke-dashoffset: 439.80316162109375;
      &.navLogo--active {
        animation: svgAnim 0.5s ease-in-out 0s forwards;
      }
    }
    &--02 {
      stroke-width: 1.5px;
      opacity: 0;
      stroke-dasharray: 180, 180;
      stroke-dashoffset: 180;
      &.navLogo--active {
        animation: svgAnim 0.5s ease-in-out 0s forwards;
      }
    }
    &--03 {
      stroke-width: 1.5px;
      opacity: 0;
      stroke-dasharray: 207.56015014648438, 207.56015014648438;
      stroke-dashoffset: 207.56015014648438;
      &.navLogo--active {
        animation: svgAnim 0.5s ease-out 0s forwards;
      }
    }
    &--04 {
      stroke-width: 1.5px;
      opacity: 0;
      stroke-dasharray: 180, 180;
      stroke-dashoffset: 180;
      &.navLogo--active {
        animation: svgAnim 0.5s ease-out 0s forwards;
      }
    }
    &--05 {
      stroke-width: 1.5px;
      opacity: 0;
      stroke-dasharray: 380, 380;
      stroke-dashoffset: 380;
      &.navLogo--active {
        animation: svgAnim 0.5s ease-out 0s forwards;
      }
    }
    &--06 {
      stroke-width: 1.5px;
      opacity: 0;
      stroke-dasharray: 207.20755004882812, 207.20755004882812;
      stroke-dashoffset: 207.20755004882812;
      &.navLogo--active {
        animation: svgAnim 0.5s ease-out 0s forwards;
      }
    }
  }
}

@keyframes svgAnim {
  100% {
    opacity: 1;
    stroke-dashoffset: 0;
    stroke-width: 1.5px;
  }
}
</style>
