<template>
  <div id="loadingLogo">
    <svg
      id="logo"
      viewBox="0 0 400 400"
      x="0px"
      y="0px"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <g id="m" transform="translate(54.764176, 0.000000)">
        <path
          id="m1"
          d="M221.885824,0 L0.465824355,380"
          class="logo__line logo__line--01"
        />
        <path
          id="m2"
          d="M221.885824,0 L221.885824,180"
          class="logo__line logo__line--02"
        />
        <path
          id="m3"
          d="M325.235824,0 L221.885824,180"
          class="logo__line logo__line--03"
        />
        <path
          id="m4"
          d="M325.235824,0 L325.235824,180"
          class="logo__line logo__line--04"
        />
      </g>
      <g id="t" transform="translate(0.000000, 198.911822)">
        <path
          id="t1"
          d="M0,1.08817778 L380,1.08817778"
          class="logo__line logo__line--05"
        />
        <path
          id="t2"
          d="M190,1.08817778 L87.36,181.088178"
          class="logo__line logo__line--06"
        />
      </g>
    </svg>
    <div class="txt jos">
      <span v-for="(text, key) in 'LOADING...'" :key="`loading-text-${key}`">{{
        text
      }}</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#loadingLogo {
  #logo {
    height: 75px;
    display: block;
    margin: 0 auto 2rem;
    .logo__line {
      stroke: $text-color;
      stroke-width: 1.5px;
      &--01 {
        stroke-width: 1.5px;
        opacity: 0;
        stroke-dasharray: 439.80316162109375, 439.80316162109375;
        stroke-dashoffset: 439.80316162109375;
        &.logo__line--active {
          animation: svgAnim 0.2s linear 0s forwards;
        }
      }
      &--02 {
        stroke-width: 1.5px;
        opacity: 0;
        stroke-dasharray: 180, 180;
        stroke-dashoffset: 180;
        &.logo__line--active {
          animation: svgAnim 0.2s linear 0s forwards;
        }
      }
      &--03 {
        stroke-width: 1.5px;
        opacity: 0;
        stroke-dasharray: 207.56015014648438, 207.56015014648438;
        stroke-dashoffset: 207.56015014648438;
        &.logo__line--active {
          animation: svgAnim 0.2s linear 0s forwards;
        }
      }
      &--04 {
        stroke-width: 1.5px;
        opacity: 0;
        stroke-dasharray: 180, 180;
        stroke-dashoffset: 180;
        &.logo__line--active {
          animation: svgAnim 0.2s linear 0s forwards;
        }
      }
      &--05 {
        stroke-width: 1.5px;
        opacity: 0;
        stroke-dasharray: 380, 380;
        stroke-dashoffset: 380;
        &.logo__line--active {
          animation: svgAnim 0.2s linear 0s forwards;
        }
      }
      &--06 {
        stroke-width: 1.5px;
        opacity: 0;
        stroke-dasharray: 207.20755004882812, 207.20755004882812;
        stroke-dashoffset: 207.20755004882812;
        &.logo__line--active {
          animation: svgAnim 0.2s linear 0s forwards;
        }
      }
    }
    &.logo--active {
      animation: 0.8s rotateLogo 0s infinite;
    }
  }
  .txt {
    letter-spacing: 3px;
    text-align: center;

    span {
      @for $i from 1 through 10 {
        &:nth-of-type(#{$i}) {
          animation: 1s loadingTxt ($i * 0.1s) infinite;
        }
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

@keyframes rotateLogo {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
}

@keyframes loadingTxt {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
