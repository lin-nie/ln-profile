<template>
  <div class="biography-wrapper wrapper-style">
    <div>
      <section class="title">
        <h2>
          Biography
        </h2>
      </section>
    </div>
    <div>
        <p class="biography-content">
            {{words.Biography.bio1.introduce}}<br>
            {{words.Biography.bio1.brief1}}<br>
            {{words.Biography.bio1.brief2}}
        </p>
        <p class="biography-content">
            {{words.Biography.bio2.introduce}}<br>
            {{words.Biography.bio2.brief1}}<br>
            {{words.Biography.bio2.brief2}}
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
    font-size: 18px;
    line-height: 1.7em;
    margin-bottom: 16px;
}
</style>
