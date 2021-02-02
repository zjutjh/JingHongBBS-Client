import Vue from 'vue';
import Vuex from 'vuex';

import exampleStore from './modules/exampleStore'

Vue.use(Vuex);

//Vuex.Store 构造器选项
const store = new Vuex.Store({
  //模块store
  modules: {
    exampleStore,
  },
  //主store
  state: {
    username: 'JingHong',
    age: 18,
  },
  getters: {
    doubleAge: state => {
      return state.age * 2;
    }
  },
  mutations: {

  },
});

export default store;
