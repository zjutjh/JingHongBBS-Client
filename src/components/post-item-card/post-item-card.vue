<template>
  <view class="jh-card">
    <view class="jh-card__header">
      <view class="jh-avatar__small">
        <image :src="item.pic" mode="aspectFill"></image>
      </view>
      <view class="jh-card__state">
        <text class="jh-card__state__name">{{ item.name }}</text>
        <text class="jh-card__state__time">{{ item.time }}</text>
      </view>
    </view>

    <view class="jh-card__context">
      <view class="jh-card__title">
        <text class="jh-card__title__tag">#{{ item.tag }}</text>
        <text class="jh-card__title__text">{{ item.title_text }}</text>
      </view>
      <view class="jh-card__article">
        <text class="jh-card__article_ctx">{{ item.article_ctx }}</text>
      </view>
    </view>
    <view class="jh-card__comments">
      <view
        class="jh-card__comment"
        v-for="(list, index) in item.comment"
        :key="index"
      >
        <text class="jh-card__comment_user">{{ list.user }}：</text>
        <text class="jh-card__comment_user_say">{{ list.user_say }}</text>
      </view>
    </view>
    <!-- <view class="jh-card__function1">
      <view class="jh-card__function1--left">
        <image
          class="jh-card__zhuanfa"
          :src="item.pic"
          mode="aspectFill"
        ></image>
        <image
          class="jh-card__liuyan"
          :src="item.pic"
          mode="aspectFill"
        ></image>
      </view>
      <view class="jh-card__function1--right">
        <image
          class="jh-card__dianzan"
          :src="item.pic"
          mode="aspectFill"
        ></image>
      </view>
    </view> -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      item: {
        pic:
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEsAu4DAREAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAYHAQQFCAMC/8QARhABAAEDAgIFBQ0FBwQDAAAAAAECAwQFEQYHEhMhMUE1NlFxcxQWFyIyU1RhdIGRkrEkVYShwRUjN1Jik7IIMzSVY7PC/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAUCBv/EACgRAQACAAQEBwEBAQAAAAAAAAABAgMEETMSMlFxExQVITFSgQVBIv/aAAwDAQACEQMRAD8AqlsYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIbwaAaAaAaAaAaAaAaAaBvACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB09AsWr+pxF2mKopomqInu3Zs3iWw8LWqnHvNKawlvU2vmrf5IcTjt1crit1Ops/M2/ywcdupxT1Ops/M2/ywcdupxT1Ops/M2/ywcdupxT1Ops/M2/ywcdupxT1Ops/M2/ywcdupxT1Ops/M2/ywcdupxT1Ops/M2/ywcdupxT1Ops/M2/yQcdupxT1JsWZiYmzb2nsn4kJjEvWdYl6i9onWJQfPtUWdQyLVuNqKLkxTHoh9BhXm9ItP+utS3FWLT/rXe3sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB1+G/Kk+yqYs/s/rLm9v9SxxnNAAAAAAAAAQbU/KuX7WX0OX2q9nXwduvZqrVoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADr8N+VJ9nUxZ/Z/WXObf6ljjOab7Rv4QCQYvBHEGbi2cnHxLVVm9RFdEzeiN4nuXRgYkxrENNcnjWiLRHtLj5uFf07Nu4eVTFN+1PRrpid4ifWqtE1nSVF6TS01t8tdDyA39K0bO1vJrx9PtU3LtFPTqiqro9nre6UtedKrMPCvizpRtapwrrOi4fuvPx7dux0oo3puRVO893Ym+Deka2e8TLYuHXivHs4ytQAg2p+Vcv2svocvtV7Ovg7dezVWrQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHX4b8qT7Opiz+z+suc2/1LHGc1ir5FXqklEr84X819M+zUfo62FyQ+ly+1Xsp/jDzv1P2rnY25Lh5res4ipnATflf5x5P2f+sNWU55dD+duz2Sfmd5pfxFv9V+b22z+js/qofFznDAQbU/KuX7WX0OX2q9nXwduvZqrVoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADr8N+VJ9nUxZ/Z/WXObf6ljjOaxV8ir1SSSv3hfzW0z7NR+jrYXJD6TL7Veyn+MPO/U/audjbkuHmt6zhqmcBN+V/nHk/Z/6w1ZXnl0P527PZKOZ3ml/EW/1X5rba/wCjs/sKg8XOcQBBtT8q5ftZfQ5far2dfB269mqtWgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOvw35Un2dTFn9n9Zc5t/qWOM5rFXyKvVJJK/eF/NbTPs1H6OthckPpMvtV7Kf4w879T9q52NuS4ea3rOGqZwE35X+ceT9n/rDVleeXQ/nbs9ko5neaX8Rb/Vfmttr/AKOz+wqDxc5xAEG1Pyrl+1l9Dl9qvZ18Hbr2aq1aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6/DflSfZ1MWf2f1lzm3+pY4zmsVfIq9Ukkr84X81tM+zUfo62FyQ+ky+1Xsp/jDzv1P2v8ARzsbclw81vWcRUzgJtyv848n7P8A1hqyvPLofzt2eyU8zvNL+It/qvzW21/0dn9hUHi5ziAINqflXL9rL6HL7Vezr4O3Xs1Vq0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB1+G/Kk+zqYs/s/rLnNv8AUscZzWKvkVeqSUSvzhfzX0z7NR+jrYXJD6XL7Vezh6ry6wtV1TIz7mdkUV36ulNNMRtCq+Wra021ZsTIVxLzeZ+Wp8FWnfvDK/Cl58pXq8em0+0sfBVp/wC8cr8KUeTr1PTafaXY4d4KxeHM+5l2Mq9dqro6E01xG0LcLAjDnWF+Bk64NuKJafM7zS/iLf6vOa21f9HZ/YVB4y5ziAINqflXL9rL6HL7Vezr4O3Xs1Vq0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB1+G/Kk+zqYs/s/rLm9v9SxxnNJ7YmPSCc6bzIv6dpmNhU6Zbrixbi3FU3Nt9vFqrmprERo6GH/AEJpWK8Pw2vhWyf3Tb/3Xrzc9Hv1O31PhWyv3Tb/AN083PQ9Tt9T4Vsr902/9083PQ9Tt9T4Vsn902/9083PQ9Tt9XI4j44vcR6VOBcwKLEdZTX04r37vqV4uPOJXTRRmM5ONTgmNETntlnYwEG1Pyrl+1l9Dl9qvZ18Hbr2aq1aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6/DflSfZVMWf2v1lze3+pY4zmgAAAAAAAAINqflXL9rL6HL7Nezr4O3Xs1Vq0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABt6dm1afmRfpp6cTE01U+O0+j61eNhRi04ZeMSkXrwy7fvox/ot78Yc306/wBoYvJ26nvox/ot38YPTr/aDyVup76Mf6Ld/GD06/2g8lbqe+jH+i3fxg9Ov9oPJW6nvox/ot38YPTr/aDyVup76Mf6Ld/GD06/2g8lbqe+jH+i3fxg9Ov9oPJW6nvox/ot38YPTr/aDyVup76Mf6Ld/GD06/2g8lbqTxRY2n9lvb+HbD1X+dbX/q3smMlOvvKO5F6rJybl+uIiq5VNUxHc6daxWsVj/G6IiI0h80pAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb0aLq0xExpWdO/d+z1dv8kcUdU6T0aVVNVFU01UzTVTO0xMbTE+hKGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEj8zXTE7TP8pE6S/UTExvAh+eso9P8AKROk9GZqiI332+4QRXTO+093pCY6tmrBzbeN7prwsqnHmN+tqs1RRt69tkawnSWv6Jjt7Yn+Yh6Jsc6+DrePat1X83pU0UxP7NV3xDP4dmvjhQOqZFvM1jPyrUzNq/k3LtG8bTNNVUzG7REezLM6zLUEAAM00zXci3RTNdc91NMTMz90A3f7G1bozV/ZWodGPH3NXt+hrCeGejR7pmmeyY7JieyYkQxNVNM7TP8AKQ0mX6t01Xq6bdqmq5XV2U0UUzMz6o7w0fTIxsjEuRbyce9Yrntim9bmiZ/ENHymYpjeUjEV0z4hpLYqwsyjG901YeTTjzG8Xps1RR+bbZGsGkvh4emAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEj1Fyut0V8tdDmqimZ6jvmI/zSyX5pa6csKa50UxTzEyopiIiMWz2RH1L8LlUYvM9EaVat1aPhTNuiZnHt9vRj/LDNPy0x8Kt5a00181uN4qpiY6+52TH/wA0rb8sKqc9lhcR4XD1q3jaxr3UW8fTapu0VXtuhTXVtETMeM+hXGvxCy0R8y39J1bTOINMpzNMybOXh170xXR2xvHfEx4T9RMTHymJ1ee+cHDOJw7xZYvYFqizi6hR1vVURtTRcpqiKto8IneJ2X4dtYZ8WsROsPReJatzhY8zbo36umfkx6IZ2l5D16Yp4i1aZmIiM29/zlsj4hin5c3rrXzlP4pQdda+cp/EH6pmK4+JVT2ztvPdHrQPR/C2scuuE9HsYuJrWlUXuhHXX6rkdZdq27Zme/v8PBmtFrS1V4a+0N7hfmdp3FnEN/SsDTtQi3RFU0ZdVuOqrimfq+Tv4b96JpMRrL1Fon4c3nDwtp+dwjla1Tj27eoYERcpvU0xE10bxE01emNp+56w7aTo8YlYmNX15L26KuW+LNVFMz7ovd8f6zE5nrD5XV1rWuD+B9Wuahqd21j6hqXR6VcUTXcmiiIpjsiPi0Rs8xFrRpCZmK+8u5n6bpPFOjdVlWbObg5NuKqKtoneJjeKqZ8J9EwiJms6wmYi0e6m+W2iVcP84tV0a7PWRjY9ymmqqPlUTNM0zP1zTMLrzrTVRh14bzC3eIcTQqcK3qOt0WKcTTrnunpXY+JTVETETMePf2R6VMTPxC+dP9Y4c4p0Ti3Bu3tIyab9q1V0LluqiaaqJ8N6Z9MFqzX5RW0W94Uvzl4Ow9B1LE1fTbNFjGzqqrd2zRG1NN2I3iaY8ImN949MLsO2saSpxaRHvCr1qkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASPUfKuqmrlponRmJ2szHZ6elLJic0tdOWFV83uHtZz+YkVYmmZORby7FqixXZtzVTMx2TEz3RtPp8FuHaIqqxKzNl+4NmrGwMexXMTVbtU0Tt6YiIUS0Kn5Zf4r8b+3uf/dK2/LCmnPZ1eeXmFb7Zj9utd3j2VIwuZONytPkLM+9XUo3nb3dM7fX0YTjcyMHlcHn/wCVOHvT0L3/ACoTg/6Y3wu/D/8ABx/Z0/pClc8t6dqeBo/M+9qGp25u4VjUMibtEW4r3iZqiPiz39uzVMTNdIZImIvrK0fhW5efuq5/66lV4d13iUPhW5efuq5/66k8O54lFd8TZWm8ecwMCzw9a9zWMum1jR07MW+jVvVNU7R9U/fssrrWusqraXtpC7dH5e8KcLYE3Y02xers0TXcysmiLlc7RvM9vd6oUTe1l8UrWHO4X5m6FxHxHb0XQdPvzbqt1Xa7/V026KaY8do7e360zSYjWStomdIdPmh/hprv2f8A/UIpzQYnLLlclP8ADfF+0Xv+acXmMPlQrnZw/q+TxVh6hiYGVl41zFizFVi3NfRriqZ6M7d2++6zCtERorxazM6wtjgbTcrR+CNIwM2JpybOPEXKZ76Znt6P3b7fcqtMTOq2saRpKFaZftX/APqI1fqtv7vT6bdcx41RTRv+u33Pc7cPEbkpDzV0nO1ngDOxtPtV3simq3d6q3G9VcU1RMxEeM7du31POHMRb3erxrXSEO5G6FqmDd1bUczFyMXHvU0WrVN6iaJuTEzMzET4R3fe94tonSHjCrMazLoc+L9qjhHAsVRE3budT0Pq2pmZRhfKcXlUAvZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFnctOaGPwnp9Wj6vYu14EV1V2L9mnpVWulO801U+Mb9u8Kr4es6wupiaRpKdapzv4YxcOurToys/J6PxLVNqaKd/8AVVPdDxGFb/Vk4tXxweeHDs4GPOfRmRmTbib1NrGmaIr27Ypnfu3PCsjxaoTwdx7ougcc8S6xme6pxdRu11WOhZ3q2m5NUdKPDsWWpM1iHit4i0zLe5lcydB4u4Wp03TYy/dEZNu7/fWejT0Y337fvRSkxOsmJeLV0hr8sOYWh8HaHmYeqe6uuvZM3aeps9OOjtEd/pMSk2n2MO8VjSXM5p8ZaVxnmaTe0r3R0cWm5FzrrfQ+VNMxt6e6U4dZr8mJeLRpCyLHO3hK1j2rcxqO9FNNMz7lnwj1q/Css8WqgtTyKMzWM/Ktb9Vfybl2jpRtPRqqmY3aI+GaZ1lqiDefSDa03UMjStTxdRxZiMjGu03bcz3bxPdP1T3ExrGkpidJ1X5pvO/hfLxKZ1K3lYV+afj2qrU3KZnx2qjvhnnCt/jRGLX/AFybfNvg3RtSt0aHoNVrHvV/teVbx6bUxT/ppjtq7fVsnw7THujxax8M8Xc1eFuJOE9S0exez7F3Ks9Ci5ViTMRO8TET2+O2xXDtE6lsSsxokHJTt5bYsz8/e/5oxeZ7w+V0OJOZOlcJcSW9K1a1fotXceL9GTap6cR8aYmmqO+O7fd5rSbRrBa8VnSUb17nlo1jDuU6Fj383LmNqKrtE27VM+mZntn1Q9xhT/rzOLH+Ihyayr+dzKy8vKuzdyL+LduXa6u+qqaqZmXvE9q6K8KdbLq4t4kt8KaBd1e9j137Nm5RTXRRO1XRqqiJmPrjffZRWNZ0X2nSNUVvc7eD7eN1lu5m3bm3/Zpxpirf0dvZ/N7jCs8eLVS/HHGmZxtrFGXfte58WxTNGNjxV0uhE99VU+NU/wAl1acMKb34pRl6eAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGd5SMIAAAABIIAAAGe7uBhIz4oFm8Dc18Xg/hezo93SMnKrt3K65uW7tNMT0p37pV3w+KdV1cWIjRHOP+L7XGuu4+pWcK7iU2saLE0Xa4qmZ6Uzv2et6pXhjR4xLcU+yKPTwk/AnFdrg3iGvVL2HdyqarFVnq7dcUzvMxO/b6nm9eKNHuluGdUq415tYvFnC+To9rR8rGrvVUTF25dpqiOjVE90ep4rh8M6vd8SJjSFX7rlLCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=',
        name: '精弘网络',
        time: '2 days ago',
        tag: 'testTag',
        title_text: '工大专属论坛终于来了',
        article_ctx:
          '你好！ laruma asd vhekiav bafevsdfgibevyekfv rkeivbewk bkeruv bewuvb s s s s s s s erwiu a a a  bkvevb uerivbekvbw vbekeruv bewuvb s s s s s s s erwiu a a a  bkvevb uerivbekvbw vberwkvkeruv bewuvb s s s s s s s erwiu a a a  bkvevb uerivbekvbw vberwkvkeruv bewuvb s s s s s s s erwiu a a a  bkvevb uerivbekvbw vberwkvrwkv byervb',
        comment: [
          {
            user: 'userA',
            user_say: 'userA say??',
          },
          {
            user: 'userB',
            user_say: 'userB say??',
          },
        ],
      },
    };
  },
};
</script>

<style src="./post-item-card.scss" lang="scss" scoped></style>
