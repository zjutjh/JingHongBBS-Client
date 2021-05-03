import * as api from '@/api/index';

//Vuex.Store 构造器选项
const exampleStore = {
  // namespaced: false,
  state: {
    date: {
      year: 2,
      month: 2,
      date: 2,
      day: 2,
    },
  },
  getters: {},
  mutations: {
    // changeDate(state, date) {
    //   state.date = date;
    // },
  },
  actions: {
    // async setDate({ state, commit, rootState }, payload) {
    //   let res = await api.getDate();
    //   console.log('got!', res);
    //   commit('changeDate', res.data);
    // },
  },
};

export default exampleStore;
