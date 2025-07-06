<template>
  <div class="education-wrapper wrapper-style">
    <div>
      <section class="title">
        <h2 id="Biography" class="href">
          {{words.educationTitle}}
        </h2>
      </section>
    </div>
    <div>
        <p class="education-content">
            {{words.education.bio1.introduce}}
            <a href="https://cai-mj.github.io/">{{words.education.bio1.mentor}}</a><br>
            {{words.education.bio1.brief1}}<br>
            <strong>{{words.education.bio1.brief2}}</strong>
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
.education-content{
    font-size: 16px;
    line-height: 1.7em;
    margin-bottom: 16px;
}
</style>
