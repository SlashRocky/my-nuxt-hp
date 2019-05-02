<template>
  <div id="pageAbout">
    <header class="header">
      <Nav />
      <Logo />
    </header>
  </div>
</template>

<script>
import Nav from '~/components/common/Nav.vue'
import Logo from '~/components/common/Logo.vue'

export default {
  components: {
    Nav,
    Logo
  }
}
</script>

<style lang="scss" scoped></style>
