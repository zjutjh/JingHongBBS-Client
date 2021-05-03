<template>
  <view class="jh-view">
    me {{ date.year }} / {{ date.month }} / {{ date.date }} / {{ test }}
  </view>
</template>

<script>
import store from '@/store';
import * as api from '@/api/index';

export default {
  data() {
    return {
      date: {
        year: 1,
        month: 1,
        date: 1,
      },
      test: '',
    };
  },
  async onLoad() {
    // this.updateDate();
    // console.log(store)
    // store.dispatch('setDate');

    const res = await api.graphTest();
    this.test = res;
    console.log(res);
  },
  computed: {},
  methods: {
    // updateDate() {
    //   this.date = store.state.exampleStore.date;
    // },
  },
};
</script>

<style lang="scss"></style>
