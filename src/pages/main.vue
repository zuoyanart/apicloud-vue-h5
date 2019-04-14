<template>
  <div style="width:100%;min-height:100%;padding-top:30px;">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      fixed
      @click-left="goback"
      @click-right="goback"
    ></van-nav-bar>
    <section style="margin-top:-46px;padding-top:64px;padding-bottom:64px;">
      <router-view v-transition></router-view>
    </section>

    <van-tabbar v-model="active" fixed @change="change">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot>分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" info="5">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="20">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    change(active) {
      let url = '/';
      switch (active) {
        case 1:
          url = '/test';
          break;
        case 2:
          url = '/cart';
          break;
        case 3:
          url = '/my';
          break;
      }
      this.$router.push(url);
    },
    goback() {
      this.$router.go(-1);
    }
  },
  mounted() { }
};
</script>