import Vue from 'vue';
import Vuex from 'vuex';

import EN, {enType} from "../dictionary/en";
import JP, { jpType } from "../dictionary/jp";
import ZH, { zhType } from "../dictionary/zh";
Vue.use(Vuex);

export type word = enType;

export type stateType = {
  words:  enType | zhType | jpType,
  dictionary: {
    en: enType,
    zh: zhType,
    jp: jpType,
  }
};

export default new Vuex.Store<stateType>({
  state: {
    words: EN as enType,
    dictionary: {
      en: EN as enType,
      zh: ZH as zhType,
      jp: JP as jpType,
    }
  },
  mutations: {
    SET_LANGUAGE(state, payload: 'en' | 'zh' | 'jp') {
      state.words = state.dictionary[payload];
    }
  },
  actions: {
    setLanguage({ commit }, payload: 'en' | 'zh' | 'jp') {
      commit('SET_LANGUAGE', payload);
    }
  },
  getters: {
    words(state) {
      return state.words;
    }
  },
  modules: {
  }
})
