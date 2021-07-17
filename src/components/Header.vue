<template>
  <div class="header-wrapper">
    <div class="content-wrapper">
      <div class="left">
        <div class="name">
          <span>{{words.name}}</span>
        </div>
        <div class="blog">{{words.blog}}</div>
      </div>
      <div class="right">
        <div @click="() => changeLanguage(item)" v-for="(item, index) in LanguageItems" :key="index" class="language-item">
          {{item.__identity}}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  State,
  Getter,
} from 'vuex-class';

@Component
export default class Header extends Vue {
  @Prop() private msg!: string;
  @Getter('words') words: any;
  @State('dictionary') dictionary: any;

  get LanguageItems () {
    return Object.keys(this.dictionary).map(key => {
      return this.dictionary[key];
  });
  }

  changeLanguage(item:any) {
    this.$store.dispatch('setLanguage', item.__langKey);
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header-wrapper{
    height: 60px;
    background: rgb(50, 58, 64);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
  }
  .content-wrapper{
    max-width: 850px;
    min-width: 850px;
    margin: 0 auto;
    padding-left: 200px;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    .left{
      float: left;
      display: flex;

      .name{
        font-size: 1.5rem;
        font-weight: 700;
      }

      .blog{
        color: #a2a2a2;
        margin-left: 1.4em;
        font-size: 1rem;
        margin-bottom: 4px;
        cursor: pointer;
        display: flex;
        align-items: flex-end;
      }
    }

    .right{
      float: right;
      display: flex;
      align-items: center;

      .language-item {
        font-size: .9rem;
        line-height: 16px;
        display: flex;
        align-items: center;
        cursor: pointer;
        background: rgb(50, 58, 64);
        transition: all linear .2s;
        box-sizing: border-box;

        &:hover{
          // margin-top: -0.5em;
          padding-bottom: 0.5em; // 防止抖动
        }
      }

      .language-item + .language-item{
        &::before{
          content: "/";
          padding: 0 5px;
        }
      }
    }
  }
</style>
