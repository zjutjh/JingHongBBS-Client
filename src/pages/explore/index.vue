<template>
  <view>
    <!-- 一个menu组件，划三个页面 -->
    <view @click="toSquare()">广场</view>
    <view @click="toCollege()">学院</view>
    <view @click="toGarden()">后院</view>
    <Square v-if="this.page==1"></Square>
    <College v-if="this.page==2"></College>
    <Garden v-if="this.page==3"></Garden>
  </view>
</template>

<script>
import store from '@/store';
import Square from './square/index';
import College from './college/index';
import Garden from './garden/index';

export default {
  components: {
    Square, College, Garden
  },
  data() {
    return {
      page: 1,
    };
  },
  async onLoad() {},
  computed: {},
  methods: {
    toSquare() {
      this.page=1;
    },toCollege() {
      this.page=2;
    },toGarden() {
      this.page=3;
    },
  },
};
</script>

<style lang="scss" src="./index.scss" scoped></style>
