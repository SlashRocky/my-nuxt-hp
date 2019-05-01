<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
html,
body {
  @include mq() {
    width: 100%;
    overflow-x: hidden;
  }
}

html {
  font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Meiryo, Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: $text-color;
  line-height: 1.7;
  font-feature-settings: 'palt' 1;
  letter-spacing: 0.01em;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  @include mq() {
    font-size: 14px;
  }
}

a {
  color: $text-color;
  text-decoration: none;
  &:visited {
    color: $text-color;
  }
}

h1,
h2,
h3,
h4 {
  font-weight: 500;
  line-height: 1.3;
}

h1 {
  font-size: 32px;
}

h2 {
  font-size: 26px;
}

h3 {
  font-size: 21px;
}

h4 {
  font-size: 18px;
}

::selection {
  background: $text-color;
  color: #ffffff;
}

.jos,
._jos {
  font-family: 'Josefin Sans', sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
