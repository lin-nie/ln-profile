<template>
  <div class="profile-wrapper">
    <div class="profile-info-wrapper">
      <div class="profile-image">
        <img src="@/assets/LINNIE_10062023_japan.jpg" />
        <ul class="content">
        <span style="display:inline-block; width: 2ch; height: 1em; background-color: transparent;"></span>
          <i>{{ words.pictureTime }}</i>
        </ul>
      </div>
      <div class="profile">
        <h1 class="name">
          {{ words.name }}
        </h1>
        <p class="advance-line">
          {{ words.degree }} <a href="https://www.cis-trans.jp/spring_gx/index-e.html">{{ words.support1 }}</a>
        </p>
        <p class="advance-line">
          {{ words.major }}
        </p>
        <p class="advance-line">
          {{ words.department }}
        </p>
        <p class="advance-line">
          {{ words.university }}
        </p>
        <hr style="margin-top: 5px"/>
        <div class="introduction">
          <ul class="content">
              <p v-html="words.personalIntroduction"></p>
          </ul>
        </div>
        <div class="logos">
          <div class="logo-row">
            <div v-for="(logo, index) in universityLogos" :key="index" class="logo-item">
              <img :src="logo.src" :alt="logo.name" :style="{ width: logo.width, height: 'auto' }" />
              <p class="logo-label">{{ logo.name }}</p>
            </div>
          </div>
        </div>
        <!-- 👇 添加的红色求职信息 -->
        <div class="highlight-message">
          <ul class="content">
            {{ words.highlight }}
          </ul>
        </div>
      </div>
    </div>
    <div class="address-wrapper"></div>
    <div class="info-wrapper">
      <div class="infos"></div>
      <div class="icons"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { word } from "@/store";
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

@Component
export default class Profile extends Vue {
  @Getter("words") words?: word;
  @State("dictionary") dictionary: any;

  get LanguageItems() {
    return Object.keys(this.dictionary).map((key) => {
      return this.dictionary[key].__identity;
    });
  }

  get universityLogos() {
    return [
      { src: require("@/assets/utokyo.jpg"), name: "Ph.D. 25-28", width: "100px"},
      { src: require("@/assets/sony.svg"), name: "Intern'23", width: "100px"},
      { src: require("@/assets/microsoft.png"), name: "Intern'24,25", width: "100px"},
    ];
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.profile-wrapper {
  width: 880px;
  margin-left: 22%;
  margin-top: 30px;
  // overflow: hidden;
}
.profile-info-wrapper {
  .profile-image {
    width: 300px;
    height: 300px;
    float: left;
    margin-right: 18px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.name {
  font-size: 2.25rem;
  margin-top: -10px;
}

.pictureTime {
  font-size: 0.25rem;
  margin-top: -5px;
}

.profile {
  padding-left: 1.5em;
}

.logos {
  display: flex;
  justify-content: center; /* 整体居中 */
  margin-top: 20px;
}

.logo-row {
  display: flex;
  flex-direction: row;
  gap: 20px;                 /* 控制 logo 间距 */
  flex-wrap: nowrap;        /* 不换行（或改 wrap） */
}

.logo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;

  img {
    width: 100px;
    height: auto;
    object-fit: contain;
  }

  .logo-label {
    font-size: 0.8rem;
    text-align: center;
    margin-top: 6px;
    font-style: italic; /* ← 加这一行，斜体效果 */
  }
}

.advance-line {
  font-size: 1.0rem;
  font-weight: 600;
  white-space: nowrap
}

.small-line{
  font-size: .95rem;
  white-space: nowrap
}

.introduction {
  margin-top: 6px;
  p{
    font-size: 0.74rem;
  }
}

.highlight-message {
  color: red;
  font-weight: bold;
  font-size: 0.9rem;
  margin-top: 16px;
  font-style: italic; /* ← 加这一行，斜体效果 */
}

p {
  line-height: 1.5;
  font-size: 1rem;
  padding: 4px 0;
}
</style>
