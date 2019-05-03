<template>
  <footer class="footer">
    <div class="footer__line"></div>
    <div class="footer__copy">
      <p class="jos">
        <span>©</span>
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

<style lang="scss" scoped></style>
