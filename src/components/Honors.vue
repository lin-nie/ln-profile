<template>
  <div class="awards-wrapper wrapper-style href" id="Honors">
    <div>
      <section class="title">
        <h2>
          {{ words.awardsTitle }}
        </h2>
      </section>
    </div>
    <ul class="awards-content" v-for="msg in words.awards">
      <p>{{words.scholarship }}</p>
      <a href="http://www.moe.gov.cn/jyb_xxgk/s5743/s5744/A05/202112/t20211216_587869.html">{{words.scholar1}}</a> &nbsp {{words.scholar1explain}}<br>
      <i>{{words.scholar1supp}}</i><br>
      {{words.scholar2}}<br>
      {{words.scholar3}}<br>
      {{words.scholar4}}<br>
      {{words.scholar5}}<br>
      {{words.scholar6}}<br>
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
  padding-left: 30px;
  font-size: 15px;
  line-height: 1.6em;
  // font-weight: 600;
  p{
    font-weight: 600;
      font-size: 18px;
      margin: 15px 0 10px -30px;
  }
  li {
    margin-bottom: 10px;
  }
}
</style>
