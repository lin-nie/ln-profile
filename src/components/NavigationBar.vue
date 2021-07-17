<template>
  <div class="navigation-wrapper">
    <ul>
      <p class="name">{{ words.navigation.name }}</p>
      <li v-for="address in words.navigation.address">{{ address }}</li>
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

  get LanguageItems() {
    return Object.keys(this.dictionary).map((key) => {
      return this.dictionary[key].__identity;
    });
  }
}
</script>

<style scoped lang="scss">
.navigation-wrapper {
  // top: 100px;
  // left: 12%;
  margin-left: 0;
  top:100px;
  position: fixed;
  border: 1px solid #e0e0e0;
  box-shadow: 1px 1px 2px #e0e0e0;
  .name {
    font-size: 30px;
    margin-bottom: 20px;
  }
  ul {
    list-style: none;
    width: 220px;
    height: 600px;
    padding-top: 30px;
    padding-left: 25px;
    font-size: 18px;
    line-height: 1.9;
    li {
      cursor: pointer;
    }
  }
}
</style>
