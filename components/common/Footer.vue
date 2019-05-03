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
  </footer>
</template>

<script>
import IconHeart from '~/components/icons/heart.vue'

export default {
  components: {
    IconHeart
  }
}
</script>

<style lang="scss" scoped></style>
