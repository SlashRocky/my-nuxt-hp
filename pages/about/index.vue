<template>
  <div id="pageAbout">
    <header class="header">
      <Nav />
      <Logo />
      <div class="profile">
        <div class="profile__top">
          <div
            id="profileCircle01"
            class="profile__circle profile__circle01"
            :class="{ 'is-active': showSwitch }"
          ></div>
          <div
            id="profileCircle02"
            class="profile__circle profile__circle02"
            :class="{ 'is-active': showSwitch }"
          ></div>
          <div
            id="profilePicture"
            class="profile__picture"
            :class="{ 'is-active': showSwitch }"
          >
            <img src="~assets/img/profile-cut.png" />
          </div>
        </div>
        <div class="profile__bottom">
          <div class="profile__name">
            <LogoTxt />
          </div>
        </div>
        <div class="profile__jp-name">
          <h2 id="profileJpName" :class="{ 'is-active': showSwitch }">
            轟 政明
          </h2>
          <span id="profileJpNameBk" ref="profileJpNameBk"></span>
        </div>
      </div>
      <ScrollDown />
    </header>
    <main class="main">
      <div id="sectionLinePosition" ref="sectionLinePosition"></div>
      <div id="sectionLine" ref="sectionLine" class="section-line"></div>
      <section id="aboutSection" class="section">
        <div id="aboutSectionInner" class="section__inner">
          <div id="aboutSectionTitle" class="section__title">
            <div class="section__container section__container01">
              <h2 ref="sectionEn" class="section__en jos">
                <div ref="sectionEnBk" class="bk"></div>
                <span
                  v-for="(text, key) in 'Profile'"
                  :key="`profile-text-en-${key}`"
                >
                  {{ text }}
                </span>
              </h2>
            </div>
            <div class="section__container section__container02">
              <h2 ref="sectionJp" class="section__jp">
                <div ref="sectionJpBk" class="bk"></div>
                <span
                  v-for="(text, key) in 'プロフィール'"
                  :key="`profile-text-jp-${key}`"
                >
                  {{ text }}
                </span>
              </h2>
            </div>
          </div>
          <div
            id="sectionContent01"
            ref="sectionContent01"
            class="section__content"
          >
            <div id="sectionLine01" class="section__line">
              <svg
                viewbox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                class="section__circle"
              >
                <circle ref="sectionCircle01" cx="7.5" cy="7.5" r="7" />
              </svg>
            </div>
            <div class="section__txt">
              <h3 class="jos">
                <span
                  v-for="(text, key) in 'Hello!'"
                  :key="`hello-text-${key}`"
                >
                  {{ text }}
                </span>
                <span v-for="(text, key) in 'I\'m'" :key="`im-text-${key}`">
                  {{ text }}
                </span>
                <span
                  v-for="(text, key) in 'FrontEnd'"
                  :key="`frontend-text-${key}`"
                >
                  {{ text }}
                </span>
                <span
                  v-for="(text, key) in 'Engineer'"
                  :key="`engineer-text-${key}`"
                >
                  {{ text }}
                </span>
              </h3>
              <div class="section__description">
                <p>
                  1980年生まれ、埼玉県上尾市出身、神奈川県川崎市在住、フロントエンドエンジニア。
                  <br class="pc" />
                  <a href="https://togo-sec.co.jp/" target="_blanc">
                    東郷証券株式会社
                  </a>
                  のホームページや社内ツールのフロントエンド、
                  <br class="pc" />
                  <a href="https://www.bitgate.co.jp/" target="_blanc">
                    Bitgate株式会社
                  </a>
                  のホームページや管理画面等のフロントエンドの制作に携わる。
                </p>
              </div>
            </div>
          </div>
          <div
            id="sectionContent02"
            ref="sectionContent02"
            class="section__content"
          >
            <div id="sectionLine02" class="section__line">
              <svg
                viewbox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                class="section__circle"
              >
                <circle ref="sectionCircle02" cx="7.5" cy="7.5" r="7" />
              </svg>
            </div>
            <div class="section__txt">
              <h3 class="jos">
                <span
                  v-for="(text, key) in 'Social'"
                  :key="`social-text-${key}`"
                >
                  {{ text }}
                </span>
                <span v-for="(text, key) in 'Media'" :key="`media-text-${key}`">
                  {{ text }}
                </span>
              </h3>
              <div class="section__description">
                <ul class="sns-lists">
                  <li class="sns__list fb">
                    <a
                      href="https://www.facebook.com/masaaki.todoroki.5"
                      target="_blank"
                      class="sns__link"
                    >
                      <IconFb />
                    </a>
                  </li>
                  <li class="sns__list tw">
                    <a
                      href="https://twitter.com/Slash_Rocky"
                      target="_blank"
                      class="sns__link"
                    >
                      <IconTw />
                    </a>
                  </li>
                  <li class="sns__list github">
                    <a
                      href="https://github.com/SlashRocky"
                      target="_blank"
                      class="sns__link"
                    >
                      <IconGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            id="sectionContent03"
            ref="sectionContent03"
            class="section__content"
          >
            <div id="sectionLine03" class="section__line">
              <svg
                viewbox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                class="section__circle"
              >
                <circle ref="sectionCircle03" cx="7.5" cy="7.5" r="7" />
              </svg>
            </div>
            <div class="section__txt">
              <h3 class="jos">
                <span
                  v-for="(text, key) in 'Information'"
                  :key="`information-text-${key}`"
                >
                  {{ text }}
                </span>
              </h3>
              <div class="section__description">
                <table>
                  <tbody>
                    <tr>
                      <th>出身・居住地</th>
                      <td>埼玉生まれ埼玉育ち。2012年より川崎市多摩区在住。</td>
                    </tr>
                    <tr>
                      <th>学歴</th>
                      <td>埼玉県立浦和高等学校、 早稲田大学大学商学部卒業。</td>
                    </tr>
                    <tr>
                      <th class="mg">
                        開発スキル/環境
                      </th>
                      <td>
                        <p class="skill-title">
                          言語
                        </p>
                        <ul class="slash">
                          <li>HTML5</li>
                          <li>CSS3・SASS・SCSS</li>
                          <li>JavaScript・Vue・Nuxt・Node</li>
                          <li>GSAP(TweenMax)・CreateJS</li>
                        </ul>
                        <p class="skill-title">
                          CMS
                        </p>
                        <ul class="slash">
                          <li>WordPress</li>
                          <li>Headless CMS</li>
                        </ul>
                        <p class="skill-title">
                          サーバー
                        </p>
                        <ul class="slash mgb-0">
                          <li>Netlify</li>
                          <li>Heroku</li>
                          <li>Rental Server</li>
                        </ul>
                        <p class="skill-title">
                          ソースコード管理
                        </p>
                        <ul class="slash">
                          <li>Git・GitHub</li>
                        </ul>
                        <p class="skill-title">
                          エディタ
                        </p>
                        <ul class="slash">
                          <li>iTerm2・Zsh・VSCode</li>
                        </ul>
                        <p class="skill-title">
                          デザインツール
                        </p>
                        <ul class="slash">
                          <li>Sketch</li>
                        </ul>
                        <p class="skill-title">
                          コミュニケーション
                        </p>
                        <ul class="slash">
                          <li>Slack</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>趣味</th>
                      <td>
                        <ul class="normal">
                          <li>音楽鑑賞</li>
                          <li>楽器演奏</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/common/Nav.vue'
import Logo from '~/components/common/Logo.vue'
import LogoTxt from '~/components/common/LogoTxt.vue'
import ScrollDown from '~/components/common/ScrollDown.vue'
import IconFb from '~/components/icons/fb.vue'
import IconTw from '~/components/icons/tw.vue'
import IconGithub from '~/components/icons/github.vue'
import Footer from '~/components/common/Footer.vue'
import { mapGetters, mapMutations } from 'vuex'
import { TimelineMax, Expo } from 'gsap'

export default {
  head: {
    title: 'About - MasaakiTodoroki'
  },
  components: {
    Nav,
    Logo,
    LogoTxt,
    IconFb,
    IconTw,
    IconGithub,
    ScrollDown,
    Footer
  },
  data() {
    return {
      showSwitch: false
    }
  },
  computed: {
    ...mapGetters({
      openedNav: 'openedNav',
      loadedIndex: 'loadedIndex',
      loadedAbout: 'loadedAbout',
      loadedPosts: 'loadedPosts',
      loadedPost: 'loadedPost',
      loadedCategories: 'loadedCategories',
      loadedCategoriesSlug: 'loadedCategoriesSlug'
    })
  },
  watch: {
    async loadedAbout() {
      await this.$_delay(3000)
      this.profileJpNameBkAnim()
      await this.$_delay(1000)
      this.showSwitch = true
    }
  },
  mounted() {
    this.setLoadedAbout()
    window.addEventListener('scroll', this.scrollEvent)
  },
  destroyed() {
    this.setUnLoadedAbout()
    window.removeEventListener('scroll', this.scrollEvent)
  },
  methods: {
    ...mapMutations({
      setLoadedAbout: 'setLoadedAbout',
      setUnLoadedAbout: 'setUnLoadedAbout'
    }),
    profileJpNameBkAnim() {
      const tlProfileJpNameBkAnim = new TimelineMax()
      requestAnimationFrame(() => {
        tlProfileJpNameBkAnim
          .set(this.$refs.profileJpNameBk, {
            scaleY: 0,
            transformOrigin: 'center top',
            ease: Expo.easeIn
          })
          .to(this.$refs.profileJpNameBk, 1, {
            scaleY: 1,
            height: '100%',
            ease: Expo.easeIn
          })
          .to(this.$refs.profileJpNameBk, 1, {
            scaleY: 0,
            transformOrigin: 'center bottom',
            ease: Expo.easeIn
          })
      })
    },
    scrollEvent() {
      const sectionLine = this.$refs.sectionLine
      let sectionLinePosition = sectionLine.getBoundingClientRect().top
      if (
        sectionLinePosition - window.innerHeight < 0 &&
        sectionLine.classList.contains('is-active') !== true
      ) {
        sectionLine.classList.add('is-active')
        const tlSectionLineAnim = new TimelineMax()
        requestAnimationFrame(() => {
          tlSectionLineAnim
            .to(sectionLine, 0.7, {
              scaleX: 1.2,
              width: '120%',
              ease: Expo.easeIn
            })
            .to(sectionLine, 1, {
              rotation: -3,
              ease: Back.easeInOut.config(1.5)
            })
        })
      }

      const sectionEn = this.$refs.sectionEn
      let sectionEnPosition = sectionEn.getBoundingClientRect().top
      if (
        sectionEnPosition - window.innerHeight < 0 &&
        sectionEn.classList.contains('is-active') !== true
      ) {
        sectionEn.classList.add('is-active')
        const sectionEnBk = this.$refs.sectionEnBk
        const tlSectionEnBk = new TimelineMax()
        requestAnimationFrame(() => {
          tlSectionEnBk
            .set(sectionEnBk, {
              scaleX: 0,
              transformOrigin: 'left center',
              ease: Expo.easeIn
            })
            .to(sectionEnBk, 1, {
              scaleX: 1,
              width: '100%',
              ease: Expo.easeIn
            })
            .to(sectionEnBk, 1, {
              scaleX: 0,
              transformOrigin: 'right center',
              ease: Expo.easeIn
            })
        })
      }

      const sectionJp = this.$refs.sectionJp
      let sectionJpPosition = sectionJp.getBoundingClientRect().top
      if (
        sectionJpPosition - window.innerHeight < 0 &&
        sectionJp.classList.contains('is-active') !== true
      ) {
        sectionJp.classList.add('is-active')
        const sectionJpBk = this.$refs.sectionJpBk
        const tlSectionJpBk = new TimelineMax()
        requestAnimationFrame(() => {
          tlSectionJpBk
            .set(sectionJpBk, {
              scaleX: 0,
              transformOrigin: 'left center',
              ease: Expo.easeIn
            })
            .to(sectionJpBk, 1, {
              scaleX: 1,
              width: '100%',
              ease: Expo.easeIn
            })
            .to(sectionJpBk, 1, {
              scaleX: 0,
              transformOrigin: 'right center',
              ease: Expo.easeIn
            })
        })
      }

      const sectionContent01 = this.$refs.sectionContent01
      const sectionCircle01 = this.$refs.sectionCircle01
      let sectionContent01Position = sectionContent01.getBoundingClientRect()
        .top
      if (
        sectionContent01Position - window.innerHeight < 0 &&
        sectionContent01.classList.contains('is-active') !== true
      ) {
        sectionContent01.classList.add('is-active')
        sectionCircle01.classList.add('is-activeStroke')
        setTimeout(() => {
          const sectionCircle01 = this.$refs.sectionCircle01
          sectionCircle01.classList.add('is-activeFill')
        }, 1600)
      }

      const sectionContent02 = this.$refs.sectionContent02
      const sectionCircle02 = this.$refs.sectionCircle02
      let sectionContent02Position = sectionContent02.getBoundingClientRect()
        .top
      if (
        sectionContent02Position - window.innerHeight < 0 &&
        sectionContent02.classList.contains('is-active') !== true
      ) {
        sectionContent02.classList.add('is-active')
        sectionCircle02.classList.add('is-activeStroke')
        setTimeout(() => {
          const sectionCircle02 = this.$refs.sectionCircle02
          sectionCircle02.classList.add('is-activeFill')
        }, 1600)
      }

      const sectionContent03 = this.$refs.sectionContent03
      const sectionCircle03 = this.$refs.sectionCircle03
      let sectionContent03Position = sectionContent03.getBoundingClientRect()
        .top
      if (
        sectionContent03Position - window.innerHeight < 0 &&
        sectionContent03.classList.contains('is-active') !== true
      ) {
        sectionContent03.classList.add('is-active')
        sectionCircle03.classList.add('is-activeStroke')
        setTimeout(() => {
          const sectionCircle03 = this.$refs.sectionCircle03
          sectionCircle03.classList.add('is-activeFill')
        }, 1600)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header.header {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .profile {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .profile__top {
      width: 266px;
      height: 266px;
      position: relative;
      margin-bottom: 1rem;
      .profile__circle {
        width: 256px;
        height: 256px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: all 3s;
        transition-delay: 1s;
        &.profile__circle01 {
          animation: profileCircle 5s ease-out infinite;
          background: rgba(234, 234, 234, 0.8);
          z-index: 1;
        }
        &.profile__circle02 {
          animation: profileCircle 5s ease-in infinite;
          background: rgba(247, 247, 247, 0.8);
          z-index: 2;
        }
        &.is-active {
          opacity: 1;
        }
      }
      .profile__picture {
        opacity: 0;
        transition: all 1s;
        img {
          width: 216px;
          height: 216px;
          display: block;
          position: absolute;
          z-index: 3;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: imgProfile 5s ease-in infinite;
        }
        &.is-active {
          opacity: 1;
        }
      }
    }
    .profile__bottom {
      .profile__name {
        svg {
          width: 216px;
          display: block;
          margin: 0 auto;
        }
      }
    }
    .profile__jp-name {
      position: absolute;
      right: -6rem;
      top: -6rem;
      z-index: 5;
      overflow: hidden;
      @include mq() {
        right: -2rem;
        top: -2rem;
        width: 41px;
        display: none;
      }
      h2 {
        font-size: 64px;
        color: #efefef;
        writing-mode: vertical-rl;
        font-weight: 200;
        opacity: 0;
        &.is-active {
          opacity: 1;
        }
        @include mq() {
          font-weight: 32px;
        }
      }
      span {
        background: #eaeaea;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 83px;
      }
    }
  }
}

main.main {
  position: relative;
  margin-bottom: 10rem;
  @include mq() {
    margin-bottom: 5rem;
  }
  .section-line {
    width: 0%;
    height: 10rem;
    background: #eaeaea;
    margin-left: -10%;
    @include mq() {
      height: 7rem;
    }
  }
  section.section {
    margin-top: -2rem;
    margin-bottom: 4rem;
    position: relative;
    @include mq() {
      padding: 0 1rem;
      margin-bottom: 2rem;
    }
    .section__inner {
      max-width: 980px;
      width: 100%;
      margin: 0 auto;
      position: relative;
      .section__title {
        margin-bottom: 4rem;
        @include mq() {
          margin-bottom: 2rem;
        }
        h2.section__en.jos {
          font-size: 4rem;
          letter-spacing: -8px;
          margin-bottom: 0.5rem;
          line-height: 1.1;
          display: inline-block;
          overflow: hidden;
          position: relative;
          width: 197px;
          @include mq() {
            font-size: 4rem;
            margin-bottom: 0;
          }
          &:after {
            content: '';
            clear: both;
            display: table;
          }
          .bk {
            position: absolute;
            top: 0;
            left: 0;
            background: $text-color;
            width: 197px;
            height: 66px;
          }
          span {
            opacity: 0;
          }
          &.is-active {
            span {
              @for $i from 1 through 12 {
                &:nth-of-type(#{$i}) {
                  animation: 2s textOpacity (random(12) * 0.1s + 1s) forwards;
                }
              }
            }
          }
        }
        h2.section__jp {
          font-size: 14px;
          margin: 0;
          display: inline-block;
          overflow: hidden;
          position: relative;
          letter-spacing: -1.4px;
          .bk {
            position: absolute;
            top: 0;
            left: 0;
            background: $text-color;
            width: 85px;
            height: 18px;
          }
          span {
            opacity: 0;
          }
          &.is-active {
            span {
              @for $i from 1 through 12 {
                &:nth-of-type(#{$i}) {
                  animation: 2s textOpacity (random(12) * 0.1s + 1s) forwards;
                }
              }
            }
          }
        }
      }
      .section__content {
        position: relative;
        &:last-child {
          .section__txt {
            padding-bottom: 0;
          }
        }
        &.is-active {
          .section__txt {
            h3 {
              span {
                @for $i from 1 through 25 {
                  &:nth-of-type(#{$i}) {
                    animation: 1s textOpacity (random(25) * 0.1s) forwards;
                  }
                }
              }
            }
            .section__description {
              opacity: 1;
            }
          }
          .section__line {
            &:before {
              height: 100%;
            }
          }
        }
        .section__line {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 15px;
          &:before {
            content: '';
            width: 1px;
            height: 0%;
            transition: height 1s ease-out 1.5s;
            background: $text-color;
            position: absolute;
            top: 1px;
            left: 0.47rem;
          }
          svg {
            width: 1rem;
            height: 1rem;
            transform: rotate(-90deg);
            vertical-align: top;
            circle {
              &.is-activeStroke {
                fill: transparent;
                stroke: $text-color;
                stroke-width: 1px;
                stroke-dasharray: 49.94157409667969;
                animation: sectionCircle 1.6s linear 0s;
                &.is-activeFill {
                  fill: #000000;
                }
              }
            }
          }
        }
        .section__txt {
          padding-left: 4rem;
          padding-bottom: 3rem;
          @include mq() {
            padding-left: 2rem;
            padding-bottom: 3rem;
          }
          h3 {
            letter-spacing: 3px;
            margin-bottom: 2rem;
            line-height: 1;
            @include mq() {
              margin-bottom: 1.5rem;
            }
            span {
              opacity: 1;
              display: inline-block;
            }
          }
          .section__description {
            opacity: 0;
            transition: 2s opacity ease-in;
            ul.sns-lists {
              height: 1.5rem;
              padding: 0 0 1px;
              margin: 0;
              li {
                display: inline-block;
                margin-right: 1.5rem;
                overflow-y: hidden;
                a {
                  display: block;
                  height: 1.5rem;
                  svg {
                    fill: $text-color;
                    height: 1.5rem;
                    transition: all 0.4s;
                  }
                }
                &:last-child {
                  margin-right: 0;
                }
                &.fb {
                  a {
                    svg {
                      &:hover {
                        fill: #3b5998;
                      }
                    }
                  }
                }
                &.tw {
                  a {
                    svg {
                      &:hover {
                        fill: #1da1f2;
                      }
                    }
                  }
                }
                &.github {
                  a {
                    svg {
                      &:hover {
                        fill: #1a1414;
                      }
                    }
                  }
                }
              }
            }
            p {
              margin-bottom: 1.25rem;
              @include mq() {
                margin-bottom: 1rem;
                br.pc {
                  display: none;
                }
              }
              &:last-child {
                margin-bottom: 0;
              }
            }
            a {
              text-decoration: underline;
              &:hover {
                text-decoration: none;
              }
            }
            table {
              border-collapse: collapse;
              width: 100%;
              font-size: 15px;
              tbody {
                tr {
                  &:first-child {
                    th {
                      padding: 0 0.75rem 1.5rem 0;
                      @include mq() {
                        padding: 0;
                      }
                    }
                    td {
                      padding: 0 0 1.5rem 0.75rem;
                      @include mq() {
                        padding: 0 0 1rem 0;
                      }
                    }
                  }
                  th {
                    font-weight: 400;
                    padding: 1.5rem 0.75rem 1.5rem 0;
                    border-bottom: 1px solid #eaeaea;
                    text-align: right;
                    vertical-align: top;
                    width: 10rem;
                    @include mq() {
                      font-weight: 500;
                      display: block;
                      text-align: left;
                      width: 100%;
                      border-bottom: none;
                      padding: 1rem 0 0 0;
                    }
                    &.mg {
                      @include mq() {
                        margin-bottom: 1rem;
                      }
                    }
                  }
                  td {
                    padding: 1.5rem 0 1.5rem 0.75rem;
                    border-bottom: 1px solid #eaeaea;
                    @include mq() {
                      display: block;
                      text-align: left;
                      width: 100%;
                      padding: 0 0 1rem 0;
                    }
                    p.skill-title {
                      position: relative;
                      font-weight: 400;
                      margin: 0 0 5px;
                      line-height: 1.7;
                      padding-left: 1.2rem;
                      &:before {
                        content: '';
                        margin: 0;
                        width: 10px;
                        height: 1px;
                        background: #232323;
                        display: block;
                        position: absolute;
                        top: 12px;
                        left: 0;
                      }
                    }
                    ul.normal {
                      margin: 0 0 1.25rem;
                      list-style: none;
                      padding: 0;
                      @include mq() {
                        margin: 0 0 1rem;
                      }
                      &:last-child {
                        margin-bottom: 0;
                      }
                      li {
                        padding-left: 1.2rem;
                        line-height: 1.7;
                        position: relative;
                        &:before {
                          content: '';
                          margin: 0;
                          width: 10px;
                          height: 1px;
                          background: $text-color;
                          display: block;
                          position: absolute;
                          top: 12px;
                          left: 0;
                        }
                      }
                    }
                    ul.slash {
                      margin: 0 0 1.25rem;
                      list-style: none;
                      padding: 0;
                      @include mq() {
                        margin: 0 0 1rem;
                      }
                      &:last-child {
                        margin-bottom: 0;
                      }
                      li {
                        display: inline-block;
                        position: relative;
                        @include mq() {
                          display: block;
                          padding-left: 1.2rem;
                          line-height: 1.7;
                        }
                        &:first-child {
                          &:before {
                            content: none;
                            @include mq() {
                              content: '';
                            }
                          }
                        }
                        &:before {
                          content: '/';
                          margin: 0 0.5rem 0 0.5rem;
                          @include mq() {
                            content: '';
                            margin: 0;
                            width: 10px;
                            height: 1px;
                            background: $text-color;
                            display: block;
                            position: absolute;
                            top: 12px;
                            left: 0;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@keyframes profileCircle {
  0% {
    transform: rotate(0deg) translate(0, 0);
  }
  12.5% {
    transform: rotate(0.4deg) translate(10px, -10px);
  }
  25% {
    transform: rotate(0.8deg) translate(0, 10px);
  }
  37.5% {
    transform: rotate(0.4deg) translate(-10px, 0);
  }
  50% {
    transform: rotate(0deg) translate(0, 0);
  }
  62.5% {
    transform: rotate(-0.4deg) translate(10px, 0);
  }
  75% {
    transform: rotate(-0.8deg) translate(0, 10px);
  }
  87.5% {
    transform: rotate(-0.4deg) translate(-10px, -10px);
  }
  100% {
    transform: rotate(0deg) translate(0, 0);
  }
}

@keyframes imgProfile {
  0% {
    mix-blend-mode: multiply;
    filter: grayscale(0);
  }
  50% {
    mix-blend-mode: multiply;
    filter: grayscale(100%);
  }
  100% {
    mix-blend-mode: multiply;
    filter: grayscale(0);
  }
}

@keyframes textOpacity {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes sectionCircle {
  0% {
    stroke-dashoffset: 49.94157409667969;
  }
  50% {
    stroke-dashoffset: 0;
    fill: transparent;
  }
  100% {
    stroke-dashoffset: 0;
    fill: #000000;
  }
}
</style>
