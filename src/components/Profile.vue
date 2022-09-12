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
          <span style="font-weight: 600">{{ words.researchStudent }}</span>
        </p>
        <hr style="margin-top: 10px"/>
        <div class="introduction">
          <ul class="content">
              <p v-html="words.personalIntroduction"></p>
              <p style="margin-top: 5px">
                <font color='red' v-html="words.notification1">
                </font>
                <br>
                <a href='http://www.linnie.com.cn/documents/curriculum_vitae.pdf'>{{words.curriculum_vitae}}</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <a href='http://www.linnie.com.cn/documents/academic_transcripts.pdf'>{{words.academic_transcripts}}</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <a href='http://www.linnie.com.cn/documents/NieLin_HNU_UTokyo_EgoV_Research_Proposal.pdf'>{{words.research_proposal}}</a>&nbsp&&nbsp
                <a href='http://www.linnie.com.cn/projects/egov/'>{{words.project_page}}</a>&nbsp&nbsp&nbsp
                <a href="http://www.linnie.com.cn/img/cvpr_2022_meeting_photo1.png">{{words.meeting_photo}}</a>&nbsp&nbsp&nbsp<br>
                <a href='http://www.linnie.com.cn/documents/recommendation_letter.pdf'>{{words.recommendation_letter}}</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <a href='http://www.linnie.com.cn/documents/research_certificate.pdf'>{{words.research_certificate}}</a>&nbsp&nbsp&nbsp&nbsp
                <a href='http://www.linnie.com.cn/documents/PRC_scholarship.pdf'>{{words.PRC_scholarship}}</a>&nbsp<br><br>
                <font color='red' v-html="words.notification2">
                </font>
                <br>
                <a href='http://www.linnie.com.cn/documents/certificate_of_diploma.pdf'>{{words.diploma_certificate}}</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <a href='http://www.linnie.com.cn/documents/certificate_of_bachelor_degree.pdf'>{{words.bachelor_certificate}}</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <a href='http://www.linnie.com.cn/documents/certificate_of_grade_first_ranking.pdf'>{{words.ranking_certificate}}</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
              </p>
          </ul>
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
  width: 870px;
  margin-left: 22%;
  margin-top: 30px;
  // overflow: hidden;
}
.profile-info-wrapper {
  .profile-image {
    width: 300px;
    height: 300px;
    float: left;
    margin-right: 18px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.name {
  font-size: 2.25rem;
  margin-top: -10px;
}

.profile {
  padding-left: 1.5rem;
}

.advance-line {
  font-size: 1.1rem;
  font-weight: 600;
  white-space: nowrap
}

.small-line{
  font-size: .95rem;
  white-space: nowrap
}

.introduction {
  margin-top: 10px;
  p{
    font-size: 0.83rem;
  }
}

p {
  line-height: 1.5;
  font-size: 1rem;
  padding: 4px 0;
}
</style>
