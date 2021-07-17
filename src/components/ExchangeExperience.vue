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
        <div class="mask-desc">
          一些介绍
        </div>
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
        transition: all ease .3s;
        max-width: 350px;
        min-width: 350px;
    }
    .exchange-img {
      position: relative;
      overflow: hidden;
      .mask-desc {
        transition: all ease .3s;
        opacity: 0;
        background-color: #000000aa;
        color: #f2f2f2;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      &:hover {
        cursor: pointer;
        .mask-desc {
        opacity: 1;
        }

        img {
          transform: scale(1.2);
        }
      }
    }
}
</style>
