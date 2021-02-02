<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text>balabla</text>
      <view class="title">{{ title }}{{ '123' }}</view>
      <view class="title">你好啊！{{ username }} </view>
      <view class="title">{{ doubleAge }} 岁</view>
    </view>
  </view>
</template>

<script>
// import store from '@/store/index.js';

export default {
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

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
