<template>
  <div class="new-wrapper wrapper-style">
    <div>
      <section class="title">
        <h2>
          {{words.newTitle}}
        </h2>
      </section>
    </div>
    <ul class="show-list">
      <li v-html="words.new.new20"></li>
      <li v-html="words.new.new19"></li>
      <li v-html="words.new.new18"></li>
      <li v-html="words.new.new17"></li>
      <li v-html="words.new.new16"></li>
      <li v-html="words.new.new15"></li>
      <li v-html="words.new.new14"></li>
      <li v-html="words.new.new13"></li>
      <li v-html="words.new.new12"></li>
      <li v-html="words.new.new11"></li>
      <li v-html="words.new.new10"></li>
      <li v-html="words.new.new9"></li>
      <li v-html="words.new.new8"></li>
      <li v-html="words.new.new7"></li>
      <li v-html="words.new.new6"></li>
      <li v-html="words.new.new5"></li>
      <li v-html="words.new.new4"></li>
      <li v-html="words.new.new3"></li>
      <li v-html="words.new.new2"></li>
      <li v-html="words.new.new1"></li>
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

<style lang="scss">
.new-wrapper {
  .show-list {
    max-height: 320px;
    overflow: auto;
    border: 1px solid #dee2e6;
    padding: 8px 0 0 46px;
    background-color: #f8f9fa !important;
    border-radius: 0.25rem !important;
    li {
      font-size: .95rem;
      line-height: 1.6em;
      a {
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
      }
    }
  }
}
</style>
