<template>
  <div class="research-wrapper wrapper-style">
    <div>
      <section class="title">
        <h2>
          {{words.researchTitle}}
        </h2>
      </section>
    </div>
    <ul class="research-content">
      <Strong>{{words.overallField}}</Strong><br>
      <li v-for="interest in words.researchOverInterest">
        {{ interest }}
      </li>
      <br>
      <Strong>{{words.specialField}}</Strong><br>  
      <li v-for="interest in words.researchSpecialInterest">
        {{ interest }}
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

  get LanguageItems() {
    return Object.keys(this.dictionary).map((key) => {
      return this.dictionary[key].__identity;
    });
  }
}
</script>

<style scoped lang="scss">
.research-content{
  padding-left: 30px;
    font-size: .95rem;
    font-family: "Noto Sans SC";
    line-height: 1.8em;
}
</style>
