<template>
  <div class="nav">
    <div id="navMask" class="nav__mask">
      <LogoNav />
      <span v-for="n in 8" :key="`nav-mask-line=${n}`" class="nav__mask__line">
      </span>
      <span class="nav__mask-around-line nav__mask__around-line--01">
        <span class="nav__mask__around-line__grad"></span>
      </span>
      <span class="nav__mask__around-line nav__mask-around-line--02">
        <span class="nav__mask__around-line__grad"></span>
      </span>
      <span class="nav__mask__around-line nav__mask-around-line--03">
        <span class="nav__mask__around-line__grad"></span>
      </span>
      <span class="nav__mask__around-line nav__mask-around-line--04">
        <span class="nav__mask__around-line__grad"></span>
      </span>
      <nav id="navLists" class="nav__lists">
        <ul class="jos">
          <li class="nav__list">
            <nuxt-link to="/" class="nav__link">
              <span class="nav__container">
                <span class="nav__txt">
                  <span v-for="(text, key) in 'Home'" :key="`home-text-${key}`">
                    {{ text }}
                  </span>
                </span>
                <span class="nav__txt__bk"></span>
              </span>
            </nuxt-link>
          </li>
          <li class="nav__list">
            <nuxt-link to="/about/" class="nav__link">
              <span class="nav__container">
                <span class="nav__txt">
                  <span
                    v-for="(text, key) in 'About'"
                    :key="`about-text-${key}`"
                  >
                  </span>
                </span>
                <span class="nav__txt__bk"></span>
              </span>
            </nuxt-link>
          </li>
          <li class="nav__list">
            <a href="http://urx2.nu/VpGk" target="_blank" class="nav__link">
              <span class="nav__container">
                <span class="nav__txt">
                  <span
                    v-for="(text, key) in 'Contanct'"
                    :key="`contact-text-${key}`"
                  >
                  </span>
                  <span class="nav__txt__bk"></span>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <button class="nav__button">
      <span class="nav__button__line">
        <span class="nav__button__line__grad"></span>
      </span>
      <span class="nav__button__line">
        <span class="nav__button__line__grad"></span>
      </span>
      <span class="nav__button__line">
        <span class="nav__button__line__grad"></span>
      </span>
      <span class="nav__button__bk"></span>
    </button>
  </div>
</template>

<script>
import LogoNav from '~/components/common/LogoNav'

export default {
  components: {
    LogoNav
  }
}
</script>

<style lang="scss" scoped></style>
