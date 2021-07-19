<template>
  <div class="copyrght-wrapper wrapper-style">
    <div>
      <section class="title">
        <h2>
          {{ words.copyrghtTitle }}
        </h2>
      </section>
    </div>
    <ul class="copyrght-content">
      <li v-for="msg in words.softwareCopyrght">
        <strong>{{ msg.name }}</strong>
        <p v-html="msg.Number"></p>
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
.copyrght-content {
  padding-left: 30px;
  font-size: .95rem;
  line-height: 1.8em;
  li {
    margin-bottom: 10px;
  }
}
</style>
