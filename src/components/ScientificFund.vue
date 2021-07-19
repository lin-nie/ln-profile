<template>
  <div class="tutorial-wrapper wrapper-style">
    <div>
      <section class="title">
        <h2>
          {{ words.scientificFundTitle }}
        </h2>
      </section>
    </div>
    <ul class="content">
      <li v-for="msg in words.scientificFund">
        <strong v-html="msg.name"></strong>
        <!-- <p v-html="msg.author"></p> -->
        {{ msg.match }}
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
.content {
  padding-left: 30px;
  font-size: .95rem;
  line-height: 1.8em;
  li {
    margin-bottom: 10px;
  }
}
</style>
