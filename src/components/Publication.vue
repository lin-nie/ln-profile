<template>
  <div class="projects-wrapper wrapper-style href" id="Publication">
    <div>
      <section class="title">
        <h2>
          {{ words.conferenceTitle }}
        </h2>
      </section>
    </div>

    <div>
      <div class="project-component" v-for="(val, index) in words.conferencePublication">
        <div class="projects-img">
          <a href="javascript:;">
            <img :src="require(`@/assets/confPublication/${index}.png`)" alt="" />
          </a>
        </div>
        <div class="content">
          <strong>{{ val.name }}</strong><img src="img/new.gif">
          <p v-html="val.author"></p>
          <p>{{ val.match }}</p>
          <p>{{ val.match2 }}</p>
          <div v-if="index==0">
            <a href='https://arxiv.org/abs/2207.03095'>{{ val.paper }}</a>
            <a href='http://www.linnie.com.cn/project/uda_action/'>{{ val.projectPage }}</a>
            <a href="https://github.com/lin-nie/EPIC-KITCHENS-C4-UDA">{{ val.code }}</a>
            {{ val.video }}
          </div>
          <div v-if="index==1">
            <a href='https://arxiv.org/abs/2207.05409'>{{ val.paper }}</a>
            <a href="https://github.com/dzy3/KCD">{{ val.code }}</a>
          </div>
          <span class="label" v-for="msg in val.label">{{msg}}</span>
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
