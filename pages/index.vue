<template>
  <div id="pageIndex">
    <header class="header">
      <div class="background">
        <Canvas />
      </div>
    </header>
    <Nav />
  </div>
</template>

<script>
import Canvas from '~/components/index/Canvas.vue'
import Nav from '~/components/common/Nav.vue'

export default {
  components: {
    Canvas,
    Nav
  }
}
</script>

<style lang="scss" scoped></style>
