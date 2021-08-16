<template>
  <div class="projects-wrapper wrapper-style">
    <div>
      <section class="title">
        <h2>
          {{ words.projectsTitle }}
        </h2>
      </section>
    </div>
    <div class="project-component" v-for="(val, index) in words.projects">
      <div class="projects-img">
        <a href="javascript:;">
          <!-- 项目图片要按照升序命名 -->
          <img :src="require(`@/assets/projectImg/${index}.png`)" alt="" />
        </a>
      </div>
      <div class="content">
        <strong>{{ val.name }}</strong>
        <p v-html="val.author"></p>
        <p>{{ val.match }}</p>
        <p>{{ val.match2 }}</p>
        <span class="label" v-for="msg in val.label">{{msg}}</span>
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
.project-component{
    &::after{
        content:"";
        display: block;
        clear: both;
    }
    margin: 20px 0;
}

.projects-img {
  float: left;
  min-width: 290px;
  max-width: 290px;
  margin-right: 20px;
  border-radius: 5px;
  border: 1px solid #b3b3b3;
  overflow: hidden;
  img {
    width: 100%;
  }
}

.projects-wrapper {
  .content {
    strong {
      font-size: 1.3rem;
    }
    font-size: .9rem;
    line-height: 2em;
    .label{
        font-size: .6rem;
        font-weight: 600;
        border-radius: .25em;
        background: #007bff;
        color: #ffffff;
        padding: .25em .4em;
        margin-right: 5px;
    }
  }
}
</style>
