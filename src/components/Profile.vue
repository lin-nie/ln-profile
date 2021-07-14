<template>
  <div class="profile-wrapper">
    <div class="profile-info-wrapper">
      <div class="profile-image">
        <img src="@/assets/image.png" />
      </div>
      <div class="profile">
        <h1 class="name">
          {{ words.name }}
        </h1>
        <p class="advance-line">
          {{ words.degree }}
        </p>
        <p class="advance-line">
          {{ words.major }}
        </p>
        <p class="small-line">
          {{ words.academy }}
        </p>
        <p class="small-line">
          {{ words.department }}
          <i style="font-weight: 600">{{ words.researchStudent }}</i>
        </p>
        <hr style="margin-top: 18px"/>
        <div class="introduction">
          <p>
            {{ words.personalIntroduction }}
          </p>
        </div>
      </div>
    </div>
    <div class="address-wrapper"></div>
    <div class="info-wrapper">
      <div class="infos"></div>
      <div class="icons"></div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.profile-wrapper {
  width: 1160px;
  margin: 0 auto;
  margin-top: 20px;
  overflow: hidden;
}
.profile-info-wrapper {
  .profile-image {
    width: 400px;
    height: 400px;
    float: left;
    margin-right: 24px;

    img {
      width: 400px;
      height: 400px;
    }
  }
}

.name {
  font-size: 48px;
}

.profile {
  padding-left: 24px;
}

.advance-line {
  font-weight: 600;
}

.small-line{
  font-size: 18px;
}

.introduction {
  margin-top: 18px;
  p{
    font-size: 18px;
  }
}

p {
  line-height: 1.5;
  font-size: 22px;
  padding: 4px 0;
}
</style>
