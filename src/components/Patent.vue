<template>
  <div class="publication">
    <div class="patent-wrapper wrapper-style href" id="Patent">
      <div>
        <section class="title">
          <h2>
            {{words.patentTitle}}
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
  font-size: .95rem;
  line-height: 1.8em;
  .content {
    padding-left: 30px;
    li {
      margin-bottom: 10px;
    }
  }
}
</style>
