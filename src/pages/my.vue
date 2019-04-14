<template>
  <div>
    <van-button @click="openFNS" type="warning">扫描</van-button>
    <van-cell-group title="分组1">
      <van-cell title="单元格" value="内容"/>
    </van-cell-group>
    <van-cell-group title="分组2">
      <van-cell title="单元格" value="内容"/>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    openFNS() {
      const FNScanner = api.require('FNScanner');
      FNScanner.open({
        autorotation: true
      }, function (ret, err) {
        if (ret) {
          alert(JSON.stringify(ret));
        } else {
          alert(JSON.stringify(err));
        }
      });
    }
  },
  mounted() {

  }
}
</script>

<style>
</style>
