<template>
  <div class="awards-wrapper wrapper-style">
    <div>
      <section class="title">
        <h2>
          {{ words.awardsTitle }}
        </h2>
      </section>
    </div>
    <ul class="awards-content" v-for="msg in words.awards">
      <p>{{ msg.subtitle }}</p>
      <li v-for="content in msg.content">{{ content }}</li>
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
.awards-content {
  font-family: "Noto Sans SC";
  padding-left: 30px;
  font-size: 20px;
  line-height: 1.6em;
  font-weight: 600;
  p{
      font-size: 25px;
      margin: 15px 0 10px -30px;
  }
  li {
    margin-bottom: 10px;
  }
}
</style>
