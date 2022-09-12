<template>
  <div class="info-list-wrapper">
    <div
      class="long-info-list list-item"
      v-for="(item, index) in longInfoList"
      :key="index"
    >
      <font-awesome-icon class="icon" :icon="item.icon" />
      {{ item.msg }}
    </div>
    <div class="short-list-wrapper">
      <div
        class="short-info-list list-item"
        v-for="(item, index) in shortInfoList"
        :key="index"
      >
        <font-awesome-icon class="icon" :icon="item.icon" />
        {{ item.msg }}
      </div>
    </div>
    <div class="icons">
      <div class="icon" v-for="(item, index) in icons" :key="index">
      <a :href=item.href style="display: block">
        <font-awesome-icon
          @mouseenter="() => setColor(item)"
          @mouseleave="() => resetColor(item)"
          :style="{ color: item.hovTheme, backgroundColor: item.bgC }"
          class="icon"
          :icon="item.icon"
        />
      </a>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

@Component
export default class extends Vue {
  created() {}
  @Getter("words") words: any;
  @State("dictionary") dictionary: any;

  get longInfoList() {
    return [
      {
        icon: ["fas", "home"],
        msg: this.words.address,
      },
    ];
  }

  get shortInfoList() {
    return [
      {
        icon: ["fas", "envelope"],
        msg: this.words.email,
      },
      {
        icon: ["fas", "phone-alt"],
        msg: this.words.phone,
      },
      {
        icon: ["fas", "tv"],
        msg: this.words.web,
      },
    ];
  }

  setColor(item: any) {
    item.hovTheme = item.theme;
  }

  resetColor(item: any) {
    item.hovTheme = "#000";
    item.bgC = "#fff";
  }

  icons = [
    {
      hovTheme: "#000",
      icon: ["fab", "github"],
      href: "https://github.com/lin-nie",
      theme: "rgb(255, 0, 0)",
    },
    {
      hovTheme: "#000",
      icon: ["fab", "google"],
      href: "https://scholar.google.com/citations?hl=en&user=3sybTOUAAAAJ",
      theme: "rgb(67, 135, 246)",
    },
    {
      hovTheme: "#000",
      icon: ["fab", "linkedin"],
      href: "https://www.linkedin.com/in/nie-lin/",
      theme: "rgb(0, 127, 178)",
    },
    {
      hovTheme: "#000",
      icon: ["fab", "twitter-square"],
      href: "https://twitter.com/NieLin6",
      theme: "rgb(29, 155, 240)",
    },
  ];
}
</script>

<style lang="scss" scoped>
.info-list-wrapper {
  width: 870px;
  margin-left: 22%;
  margin-top: 30px;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
}

.list-item {
  padding: 6px 0;
}

.long-info-list {
  font-size: 0.85rem;
  white-space: nowrap;
}

.short-list-wrapper {
  float: left;
  overflow: hidden;
  margin-right: 24px;
  font-size: 0.85rem;
}

.icons {
  display: flex;
  float: right;
  margin-top: 40px;

  .icon {
    cursor: pointer;
    width: 50px;
    height: 50px;
    margin: 0 5px;
    transition: all ease 0.3s;
  }
}
</style>
