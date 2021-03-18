<template>
  <view class="jh-view">
    <view class="jh-post">
      <view class="jh-post__body">
        <view class="jh-body__head">
          <image class="jh-avatar--large" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201504%2F19%2F20150419H4644_tKx23.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618400914&t=0acf7d7d5d92691f2c2e79eb98303009" >
          <view class="jh-body__head__name">Congb19</view>
        </view>
        <view class="jh-body__title">
          食堂新开的水果捞好好吃！
        </view>
        <view class="jh-body__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora soluta, placeat ut sint voluptate corporis consequatur reiciendis aperiam rerum, pariatur nisi? Quia nihil maxime atque! Laudantium excepturi tenetur quisquam ratione?
        </view>
        <view class="jh-body__actions">
          actions
        </view>
      </view>
      <view class="jh-post__replies">
        <view class="jh-replies__reply">
          <PostReply></PostReply>
        </view>
        <view class="jh-replies__reply">
          <PostReply></PostReply>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import store from '@/store';
import PostReply from '@/components/post-reply';

export default {
  components: {
    PostReply
  },
  data() {
    return {
      
    };
  },
  async onLoad(option) {
    console.log("a");
    console.log(option);
    // 请求，渲染数据

  },
  computed: {},
  methods: {
  },
};
</script>

<style lang="scss" src="./index.scss" scoped></style>
