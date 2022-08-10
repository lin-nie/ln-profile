<template>
  <div class="navigation-wrapper">
    <ul>
      <p class="name">{{ words.navigation.name }}</p>
      <li v-for="(address, index) in words.navigation.address">
        <a class="menu-item" :href="`#${href[index]}`">{{ address }}</a>
      </li>
    </ul>
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

  href = [
    "Home",
    "New",
    "Research Interest",
    "Publication",
    "Projects",
    "Biography",
    "Professional Experience",
    "Honors",
    "Patent",
    "Software Copyrght",
    "Fund Participation",
  ];

  get LanguageItems() {
    return Object.keys(this.dictionary).map((key) => {
      return this.dictionary[key].__identity;
    });
  }
}
</script>

<style scoped lang="scss">
.menu-item {
  text-decoration: none;
  list-style: none;
  color: steelblue;
}
.navigation-wrapper {
  // top: 100px;
  // left: 12%;
  margin-left: 0;
  top: 78px;
  position: fixed;
  border: 1px solid #e0e0e0;
  box-shadow: 1px 1px 2px #e0e0e0;
  .name {
    font-size: 27px;
    margin-bottom: 20px;
    font-weight: 600;
  }
  ul {
    background: #ffffff;
    list-style: none;
    width: 200px;
    height: 420px;
    padding-top: 30px;
    padding-left: 20px;
    font-size: 0.95rem;
    line-height: 1.9;
    li {
      cursor: pointer;
    }
  }
}
</style>
