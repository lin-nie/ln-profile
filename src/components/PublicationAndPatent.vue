<template>
  <div class="publication">
    <div class="conference-wrapper wrapper-style">
      <div>
        <section class="title">
          <h2>
            Conference Publication
          </h2>
        </section>
      </div>
      <ul class="content">
        <li v-for="msg in words.conferencePublication">
          <strong>{{ msg.name }}</strong>
          <p v-html="msg.author"></p>
          {{ msg.date }}
        </li>
      </ul>
    </div>
    <div class="journal-wrapper wrapper-style">
      <div>
        <section class="title">
          <h2>
            Journal Publication
          </h2>
        </section>
      </div>
      <ul class="content">
        <li v-for="msg in words.journalPublication">
          <strong>{{ msg.name }}</strong>
          <p v-html="msg.author"></p>
          <p v-html="msg.date"></p>
        </li>
      </ul>
    </div>
    <div class="patent-wrapper wrapper-style">
      <div>
        <section class="title">
          <h2>
            Patent
          </h2>
        </section>
      </div>
      <ul class="content">
        <li v-for="msg in words.patent">
          <strong>{{ msg.name }}</strong>
          <p v-html="msg.author"></p>
          <p v-html="msg.number"></p>
        </li>
      </ul>
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
.publication {
  font-size: 20px;
  line-height: 1.8em;
  .content {
    font-family: "Noto Sans SC";
    padding-left: 30px;
    li {
      margin-bottom: 10px;
    }
  }
}
</style>
