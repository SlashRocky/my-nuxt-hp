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
  }
}
</script>

<style lang="scss" scoped></style>
