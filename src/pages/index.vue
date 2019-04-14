<style lang="less">
</style>

<template>
  <div>
    <div>精彩商品</div>
    <van-card
      num="2"
      price="2.00"
      desc="描述信息1"
      :title="'商品标题' + item.id"
      :thumb="imageURL"
      v-for="item in items"
    ></van-card>
    <div>精彩商品</div>
  </div>
</template>

<script>
import swipper from '../components/swipper/index';

export default {
  data() {
    return {
      imageURL: 'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg',
      items: []
    };
  },
  methods: {

  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.items.push({
        id: i
      })
    }
    console.log('asdasd------------');
    console.log(this.$ac);
  },
  destroyed() {

  },
  components: {
    'base-swipper': swipper
  }
};
</script>