<template>
  <div class="experience-wrapper wrapper-style href" id="Professional Experience">
    <div>
      <section class="title">
        <h2>
          {{ words.exchangeTitle }}
        </h2>
      </section>
    </div>
    <div class="subtitle">
      <strong>{{words.exchangeSubtitle}}</strong>
    </div>
    <div class="img-box">
      <div class="exchange-img" v-for="msg in words.exchange">
        <img
          :src="require(`@/assets/experienceImg/${msg.imgName}.jpg`)"
          alt=""
        />
        <a :href="msg.href">
          <div class="mask-desc">
            <div class="mask-content" v-html="msg.intro"></div>
          </div>
        </a>
      </div>
    </div>
    <br>
    <div>
      <ul>
        <li v-for="val in words.profExprience">
          <strong>{{ val.name }}</strong><br>
          {{val.workplace}}<span v-html="'\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0'"></span>{{val.topic}}<br>
          {{val.title}},{{val.supervisor}}
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
.subtitle{
  margin-top: -10px; 
  margin-bottom: 3px; 
  font-size: .95rem;
  line-height: 1.8rem;
}

.img-box {
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  img {
    transition: all ease 0.3s;
    max-width: 350px;
    min-width: 350px;
  }
  .exchange-img {
    position: relative;
    overflow: hidden;
    .mask-desc {
      transition: all ease 0.3s;
      opacity: 0;
      background-color: #000000aa;
      color: #f2f2f2;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      .mask-content {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    &:hover {
      cursor: pointer;
      .mask-desc {
        opacity: 1;
        padding: 0 10px;
        line-height: 18px;
      }

      img {
        transform: scale(1.2);
      }
    }
  }
}
</style>
