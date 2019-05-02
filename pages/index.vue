<template>
  <div id="pageIndex">
    <header class="header">
      <div class="background">
        <Canvas />
      </div>
    </header>
    <Nav />
    <div class="sns">
      <ul>
        <li class="sns__list fb">
          <a
            href="https://www.facebook.com/masaaki.todoroki.5"
            target="_blank"
            class="sns__link"
          >
            <IconFb />
            <span class="bk"></span>
          </a>
        </li>
        <li class="sns__list tw">
          <a
            href="https://twitter.com/Slash_Rocky"
            target="_blank"
            class="sns__link"
          >
            <IconTw />
            <span class="bk"></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Canvas from '~/components/index/Canvas.vue'
import Nav from '~/components/common/Nav.vue'
import IconFb from '~/components/icons/fb.vue'
import IconTw from '~/components/icons/tw.vue'

export default {
  components: {
    Canvas,
    Nav,
    IconFb,
    IconTw
  }
}
</script>

<style lang="scss" scoped></style>
