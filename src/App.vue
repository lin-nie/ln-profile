<template>
  <div id="app">
    <Header></Header>
    <div class="container href" id="Home">
      <Profile></Profile>
      <info-list></info-list>
      <NavigationBar></NavigationBar>
      <New></New>
      <ResearchInterest></ResearchInterest>
      <Publication></Publication>
      <Projects></Projects>
      <Biography></Biography>
      <ProfessionalExperience></ProfessionalExperience>
      <Honors></Honors>   
      <Patent></Patent>
      <SoftwareCopyrght></SoftwareCopyrght>
      <ScientificFund></ScientificFund>
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
import ResearchInterest from "./components/ResearchInterest.vue";
import Publication from "./components/Publication.vue";
import Projects from "./components/Projects.vue";
import Biography from "./components/Biography.vue";
import ProfessionalExperience from "./components/ProfessionalExperience.vue";
import Honors from "./components/Honors.vue";
import Patent from "./components/Patent.vue";
import SoftwareCopyrght from "./components/SoftwareCopyrght.vue";
import ScientificFund from "./components/ScientificFund.vue";
import Footer from "./components/Footer.vue";

@Component({
  components: {
    Header,
    Profile,
    InfoList,
    NavigationBar,
    New,
    ResearchInterest,
    Publication,
    Projects,
    Biography,
    ProfessionalExperience,
    Honors,
    Patent,
    SoftwareCopyrght,
    ScientificFund,
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
    zoom: 1.2;
}

// 组件基础样式
.wrapper-style {
  width: 870px;
  margin-left: 22%;
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
