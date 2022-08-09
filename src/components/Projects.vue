<template>
  <div class="projects-wrapper wrapper-style">
    <div>
      <section class="title">
        <h2>
          {{ words.projectsTitle }}
        </h2>
      </section>
    </div>
    <h4>
      <span style="background-color: #ffffd0">{{words.projectsHightLight}}</span>{{words.projectsNote}}
    </h4>

    <!-- Recently Projects 最近的项目-->
    <div style="background:#ffffd0">
      <div class="project-component" v-for="(val, index) in words.recentlyProjects">
        <div class="projects-img">
          <a href="javascript:;">
            <!-- 项目图片要按照升序命名 -->
            <img :src="require(`@/assets/recentlyProjectImg/${index}.gif`)" alt="" />
          </a>
        </div>
        <div class="content">
          <strong>{{ val.name }}</strong>
          <p v-html="val.author"></p>
          <p>{{ val.match }}</p>
          <p>{{ val.match2 }}</p>
          <div v-if="index==0">
            {{ val.paper }}
            {{ val.projectPage }}
            {{ val.code }}
            {{ val.video }}
          </div>
          <div v-if="index==1">
            <a href='https://arxiv.org/pdf/2207.03095.pdf'>{{ val.paper }}</a>
            {{ val.projectPage }}
            <a href="https://github.com/lin-nie/EPIC-KITCHENS-C4-UDA">{{ val.code }}</a>
            {{ val.video }}
          </div>
          <div v-if="index==2">
            <a href='https://arxiv.org/abs/2207.05409'>{{ val.paper }}</a>
            <a href='https://github.com/dzy3/KCD'>{{ val.code }}</a>
          </div>
          <div v-if="index==3">
            {{ val.video }}
          </div>
          <span class="label" v-for="msg in val.label">{{msg}}</span>
        </div>
      </div>
    </div>

    <!-- Pass Projects 过去的项目-->
    <div class="project-component" v-for="(val, index) in words.pastProjects">
      <div class="projects-img">
        <a href="javascript:;">
          <!-- 项目图片要按照升序命名 -->
          <img :src="require(`@/assets/pastProjectImg/${index}.png`)" alt="" />
        </a>
      </div>
      <div class="content">
        <strong>{{ val.name }}</strong>
        <p v-html="val.author"></p>
        <p>{{ val.match }}</p>
        <p>{{ val.match2 }}</p>
          <div v-if="index==0">
            <a href='https://ieeexplore.ieee.org/document/9689024'>{{ val.paper }}</a>
            {{ val.projectPage }}
            {{ val.code }}
            {{ val.video }}
          </div>
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
