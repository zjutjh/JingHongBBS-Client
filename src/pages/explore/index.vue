<template>
  <view class="jh-view">
    <!-- 一个nav-menu组件，划三个页面 -->
    <view>
      <text @click="toSquare()">广场</text>
      <text @click="toCollege()">学院</text>
      <text @click="toGarden()">后院</text>
    </view>
    <swiper
      style="height: 100%; overflow: auto"
      :current="currentPage"
      @change="swiperTab"
    >
      <swiper-item
        style="height: auto"
        v-for="(item, index) in [0, 1, 2]"
        :key="index"
      >
        <view style="height: 100%; background: #efeff4">
          <Square v-if="item == 0"></Square>
          <College v-if="item == 1"></College>
          <Garden v-if="item == 2"></Garden>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import store from '@/store';
import Square from './square/index';
import College from './college/index';
import Garden from './garden/index';

export default {
  components: {
    Square,
    College,
    Garden,
  },
  data() {
    return {
      currentPage: 0,
    };
  },
  async onLoad() {},
  computed: {},
  methods: {
    toSquare() {
      this.currentPage = 0;
    },
    toCollege() {
      this.currentPage = 1;
    },
    toGarden() {
      this.currentPage = 2;
    },
  },
};
</script>

<style lang="scss" src="./index.scss" scoped></style>
