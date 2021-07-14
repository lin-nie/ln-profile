<template>
  <div id="app">
    <Header></Header>
    <Profile></Profile>
    <info-list></info-list>
    <New></New>
    <Biography></Biography>
    <ResearchInterest></ResearchInterest>
    <PublicationAndPatent></PublicationAndPatent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import InfoList from "./components/InfoList.vue";
import Profile from "./components/Profile.vue";
import New from "./components/New.vue";
import Biography from "./components/Biography.vue";
import ResearchInterest from "./components/ResearchInterest.vue";
import PublicationAndPatent from "./components/PublicationAndPatent.vue";

@Component({
  components: {
    Header,
    Profile,
    InfoList,
    New,
    Biography,
    ResearchInterest,
    PublicationAndPatent,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
// 组件基础样式
.wrapper-style{
  width: 1160px;
  margin: 0 auto;
  margin-top: 25px;
  overflow: hidden;
}

// 组件标题样式
.title{
  font-size: 20px;
  margin-bottom: 14px;
  &::after{
    content: "";
    display: block;
    margin-top: 4px;
    border: 1px solid #b3b3b3;
  }
}
</style>
