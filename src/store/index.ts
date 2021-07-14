import Vue from 'vue';
import Vuex from 'vuex';

import EN, {enType} from "../dictionary/en";
import JP, { jpType } from "../dictionary/jp";
import ZH, { zhType } from "../dictionary/zh";
Vue.use(Vuex);

export type word = enType;

export default new Vuex.Store<any>({
  state: {
    words: EN as enType,
    dictionary: {
      en: EN as enType,
      zh: ZH as zhType,
      jp: JP as jpType,
    }
  },
  mutations: {
    SET_LANGUAGE(state, payload) {
      state.words = (state.dictionary[payload]) as any;
    }
  },
  actions: {
    setLanguage({ commit }, payload) {
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
