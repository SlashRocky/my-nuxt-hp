<template>
  <div id="pageIndex">
    <header class="header">
      <div class="background">
        <Canvas />
      </div>
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
          <li class="sns__list github">
            <a
              href="https://github.com/SlashRocky"
              target="_blank"
              class="sns__link"
            >
              <IconGithub />
              <span class="bk"></span>
            </a>
          </li>
        </ul>
      </div>
    </header>
    <main class="main">
      <div class="logo">
        <LogoTxt />
        <div id="logoDescription" class="logo__description">
          <p>
            <span
              v-for="(text, key) in '川崎在住の'"
              :key="`address-text-${key}`"
              class="logo__description-l01"
            >
              {{ text }}
            </span>
          </p>
          <p>
            <span
              v-for="(text, key) in 'フロントエンドエンジニア'"
              :key="`profession-text-${key}`"
              class="logo__description-l02"
            >
              {{ text }}
            </span>
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Canvas from '~/components/index/Canvas.vue'
import Nav from '~/components/common/Nav.vue'
import IconFb from '~/components/icons/fb.vue'
import IconTw from '~/components/icons/tw.vue'
import IconGithub from '~/components/icons/github.vue'
import LogoTxt from '~/components/common/LogoTxt.vue'

export default {
  components: {
    Canvas,
    Nav,
    IconFb,
    IconTw,
    IconGithub,
    LogoTxt
  }
}
</script>

<style lang="scss" scoped></style>
