<template>
  <div class="research-wrapper wrapper-style">
    <div>
      <section class="title">
        <h2>
          Research Interest
        </h2>
      </section>
    </div>
    <div class="research-content">
      <p v-for="interest in words.researchInterest">
        {{ interest }}
      </p>
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
}
</script>

<style scoped lang="scss">
.research-content{
    font-size: 20px;
    font-family: "Noto Sans SC";
    line-height: 1.8em;
}
</style>
