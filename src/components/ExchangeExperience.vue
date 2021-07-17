<template>
  <div class="experience-wrapper wrapper-style">
    <div>
      <section class="title">
        <h2>
          {{ words.exchangeTitle }}
        </h2>
      </section>
    </div>
    <div class="img-box">
      <div class="exchange-img" v-for="name in words.exchangeImgName">
        <img :src="require(`@/assets/experienceImg/${name}.jpg`)" alt="" />
      </div>
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
.img-box{
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    img{
        max-width: 350px;
        min-width: 350px;
    }
}
</style>
