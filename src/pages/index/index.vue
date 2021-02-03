<template>
  <view class="jh-content">
    <image class="jh-logo" src="/static/logo.png"></image>
    <h1>Vuex ceshi测试</h1>
    <view class="jh-article">
      <view class="jh-article__title--bold">{{ title }}{{ '123' }}</view>
      <view class="jh-article__title">你好啊！{{ username }} </view>
      <view class="jh-article__title">{{ doubleAge }} 岁</view>
    </view>
    <h1>富文本组件测试</h1>
    <jh-editor />
  </view>
</template>

<script>
// import store from '@/store/index.js';
import JhEditor from '../../components/jh-editor/jh-editor.vue';

export default {
  components: {
    JhEditor,
  },
  data() {
    return {
      title: 'Hello',
    };
  },
  onLoad() {},
  computed: {
    username() {
      return this.$store.state.username;
      // return store.state.username
    },
    doubleAge() {
      return this.$store.getters.doubleAge;
    },
  },
  methods: {},
};
</script>

<style lang="scss" src="./index.scss" scoped></style>
