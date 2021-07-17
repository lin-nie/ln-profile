<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <Profile></Profile>
      <info-list></info-list>
      <NavigationBar></NavigationBar>
      <New></New>
      <Biography></Biography>
      <ExchangeExperience></ExchangeExperience>
      <ResearchInterest></ResearchInterest>
      <PublicationAndPatent></PublicationAndPatent>
      <SoftwareCopyrght></SoftwareCopyrght>
      <Awards></Awards>
      <Projects></Projects>
      <Tutorial></Tutorial>
      <Footer></Footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import InfoList from "./components/InfoList.vue";
import Profile from "./components/Profile.vue";
import NavigationBar from "./components/NavigationBar.vue";
import New from "./components/New.vue";
import Biography from "./components/Biography.vue";
import ExchangeExperience from "./components/ExchangeExperience.vue";
import ResearchInterest from "./components/ResearchInterest.vue";
import PublicationAndPatent from "./components/PublicationAndPatent.vue";
import SoftwareCopyrght from "./components/SoftwareCopyrght.vue";
import Awards from "./components/Awards.vue";
import Projects from "./components/Projects.vue";
import Tutorial from "./components/Tutorial.vue";
import Footer from "./components/Footer.vue";

@Component({
  components: {
    Header,
    Profile,
    InfoList,
    NavigationBar,
    New,
    Biography,
    ExchangeExperience,
    ResearchInterest,
    PublicationAndPatent,
    SoftwareCopyrght,
    Awards,
    Projects,
    Tutorial,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">

html{
  font-size: 16px;
}

body{
    font-family: segoeui,Microsoft YaHei UI,Microsoft YaHei,Arial,sans-serif;

}

// 组件基础样式
.wrapper-style {
  width: 760px;
  margin-left: 22%;
  margin-top: 50px;
  overflow: hidden;
}

// 组件标题样式
.title {
  font-size: 1rem;
  margin-bottom: .9rem;
  &::after {
    content: "";
    display: block;
    margin-top: 4px;
    border: 1px solid #b3b3b3;
  }
}

.container{
  width: 1150px;
  margin: 0 auto;
}
</style>
