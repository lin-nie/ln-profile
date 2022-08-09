<template>
  <div class="biography-wrapper wrapper-style">
    <div>
      <section class="title">
        <h2 id="Biography" class="href">
          {{words.biographyTitle}}
        </h2>
      </section>
    </div>
    <div>
        <p class="biography-content">
            {{words.biography.bio1.introduce}}
            <a href="https://cai-mj.github.io/">{{words.biography.bio1.mentor}}</a><br>
            {{words.biography.bio1.brief1}}<br>
            <strong>{{words.biography.bio1.brief2}}</strong>
        </p>
        <p class="biography-content">
            {{words.biography.bio2.introduce}}<br>
            {{words.biography.bio2.brief1}}<br>
            <strong>{{words.biography.bio2.brief2}}</strong>
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
.biography-content{
    font-size: 16px;
    line-height: 1.7em;
    margin-bottom: 16px;
}
</style>
