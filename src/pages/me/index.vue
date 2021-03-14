<template>
  <view class="jh-view">
    me {{ date.year }} / {{ date.month }} / {{ date.date }}
  </view>
</template>

<script>
import store from '@/store';

export default {
  data() {
    return {
      date: {
        year: 1,
        month: 1,
        date: 1,
      },
    };
  },
  async onLoad() {
    this.updateDate();
    // console.log(store)
    store.dispatch('setDate');
  },
  computed: {},
  methods: {
    updateDate() {
      this.date = store.state.exampleStore.date;
    },
  },
};
</script>

<style lang="scss"></style>
