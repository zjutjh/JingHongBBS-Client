<template>
  <view class="jh-content">
    <uni-nav-bar
      left-icon="back"
      left-text="返回"
      right-icon="search"
      title="导航栏组件"
      fixed
    ></uni-nav-bar>
    <image class="jh-logo" src="/static/logo.png"></image>
    <uni-badge text="2" type="primary"></uni-badge>
    <uni-swiper-dot
      :info="info"
      :current="current"
      field="content"
      :mode="mode"
    >
      <swiper class="swiper-box" @change="change">
        <swiper-item v-for="(item, index) in info" :key="index">
          <view class="swiper-item"> 轮播图：{{ item.content }} </view>
        </swiper-item>
      </swiper>
    </uni-swiper-dot>
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
import mpHtml from 'mp-html/dist/uni-app/components/mp-html/mp-html';
import JhEditor from '@/components/jh-editor/jh-editor.vue';

import store from '@/store/index.js';

export default {
  components: {
    JhEditor,
    mpHtml,
  },
  data() {
    return {
      html: '<h1>Hello World!</h1>',
      title: 'Hello',
      info: [
        {
          content: '内容 A',
        },
        {
          content: '内容 B',
        },
        {
          content: '内容 C',
        },
      ],
      current: 0,
      mode: 'round',
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
  methods: {
    change(e) {
      this.current = e.detail.current;
    },
  },
};
</script>

<style lang="scss" src="./index.scss" scoped></style>
