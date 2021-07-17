<template>
  <div class="footer-wrapper wrapper-style">
    <p>{{ words.footer.period }}</p>
    <p class="update">
      <strong>{{ words.footer.lastUpdated }}</strong>
    </p>
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
.footer-wrapper {
  font-size: 20px;
  line-height: 1.8em;
  .update {
    font-style: italic;
    padding-left: 1em;
  }
  margin-top: 40px;
  margin-bottom: 60px;
}
</style>
