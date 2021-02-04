<template>
  <view class="jh-content">
    <image class="jh-logo" src="/static/logo.png"></image>
    <view>mp-html测试</view>
    <mp-html :content="html" />
    <view>Vuex ceshi测试</view>
    <view class="jh-article">
      <view class="jh-article__title--bold">{{ title }}{{ '123' }}</view>
      <view class="jh-article__title">你好啊！{{ username }} </view>
      <view class="jh-article__title">{{ doubleAge }} 岁</view>
    </view>
    <view>富文本组件测试</view>
    <jh-editor />
  </view>
</template>

<script>
import mpHtml from 'mp-html/dist/uni-app/components/mp-html/mp-html'
import JhEditor from '@/components/jh-editor/jh-editor.vue';

import store from '@/store/index.js';

export default {
  components: {
    JhEditor, mpHtml
  },
  data() {
    return {
      html: '<h1>Hello World!</h1>',
      title: 'Hello',
    };
  },
  onLoad() {},
  computed: {
    username() {
      return store.state.username;
    },
    doubleAge() {
      return store.getters.doubleAge;
    },
  },
  methods: {},
};
</script>

<style lang="scss" src="./index.scss" scoped></style>
