<template>
  <div id="pageAbout">
    <header class="header">
      <Nav />
      <Logo />
      <div class="profile">
        <div class="profile__top">
          <div
            id="profileCircle01"
            class="profile__circle profile__ciecle01"
          ></div>
          <div
            id="profileCircle02"
            class="profile__circle profile__circle02"
          ></div>
          <div id="profilePicture" class="profile__picture">
            <img src="~assets/img/profile-cut.png" />
          </div>
        </div>
        <div class="profile__bottom">
          <div class="profile__name">
            <LogoTxt />
          </div>
        </div>
        <div class="profile__jp-name">
          <h2 id="profileJpName">轟 政明</h2>
          <span id="profileJpNameBk"></span>
        </div>
      </div>
      <ScrollDown />
    </header>
  </div>
</template>

<script>
import Nav from '~/components/common/Nav.vue'
import Logo from '~/components/common/Logo.vue'
import ScrollDown from '~/components/common/ScrollDown.vue'

export default {
  components: {
    Nav,
    Logo,
    ScrollDown
  }
}
</script>

<style lang="scss" scoped></style>
