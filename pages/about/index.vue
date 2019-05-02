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
          <h2 id="profileJpName">
            轟 政明
          </h2>
          <span id="profileJpNameBk"></span>
        </div>
      </div>
      <ScrollDown />
    </header>
    <main class="main">
      <div id="sectionLinePosition"></div>
      <div id="sectionLine" class="section-line"></div>
      <section id="aboutSection" class="section">
        <div id="aboutSectionInner" class="section__inner">
          <div id="aboutSectionTitle" class="section__title">
            <div class="section__container section__container01">
              <h2 class="section__en jos">
                <div class="bk">
                  <span
                    v-for="(text, key) in 'Profile'"
                    :key="`profile-text-en-${key}`"
                  >
                    {{ text }}
                  </span>
                </div>
              </h2>
            </div>
            <div class="section__container section__container02">
              <h2 class="section__jp">
                <div class="bk"></div>
                <span
                  v-for="(text, key) in 'プロフィール'"
                  :key="`profile-text-jp-${key}`"
                >
                  {{ text }}
                </span>
              </h2>
            </div>
          </div>
          <div id="sectionContent01" class="section__content">
            <div id="sectionLine01" class="section__line">
              <svg
                viewbox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                class="section__circle"
              >
                <circle cx="9" cy="9" r="8" />
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
                  v-for="(text, key) in 'Frontend'"
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
                  1980年生まれ埼玉県上尾市出身神奈川県川崎市在住、フロントエンドエンジニア。
                  <br class="pc" />
                </p>
              </div>
            </div>
          </div>
          <div id="sectionContent02" class="section__content">
            <div id="sectionLine02" class="section__line">
              <svg
                viewbox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                class="section__circle"
              >
                <circle cx="9" cy="9" r="8" />
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
          <div id="sectionContent03" class="section__content">
            <div id="sectionLine03" class="section__line">
              <svg
                viewbox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                class="section__circle"
              >
                <circle cx="9" cy="9" r="8" />
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
                      <td>埼玉県立浦和高校、 早稲田大学大学商学部卒業。</td>
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
                          <li>JavaScreipt・Vue・Nuxt・Node</li>
                          <li>GSAP(TweenMax)・CreateJS</li>
                        </ul>
                        <p class="skill-title">
                          CMS
                        </p>
                        <ul class="slash">
                          <li>WordPress</li>
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
import ScrollDown from '~/components/common/ScrollDown.vue'
import Footer from '~/components/common/Footer.vue'

export default {
  components: {
    Nav,
    Logo,
    ScrollDown,
    Footer
  }
}
</script>

<style lang="scss" scoped></style>
