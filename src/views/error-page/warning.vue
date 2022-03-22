<template>
  <div class="warning-container">
    <div class="warn-box">
      <img class="warn-img" src="@/assets/img/error-page/warning.svg">
      <div class="title">出错了！</div>
      <div class="btn-list">
        <van-button block type="primary" @click="close">我知道了</van-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Warning",
  setup: function() {

    const close = () => {
      console.log("window");
    };
    return {
      close
    };
  }
});

</script>

<style lang="scss" scoped>
.warning-container {
  background-color: #FFFFFF;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .warn-box {

    .warn-img {
      width: 250px;
      height: 123px;
    }

    .title {
      font-size: 24px;
      font-family: $base-font-family;
      font-weight: 500;
      color: #505050;
      line-height: 34px;
      text-align: center;
      margin-top: 40px;
    }

    .info {
      font-size: 16px;
      font-family: $base-font-family;
      font-weight: 400;
      color: #888888;
      line-height: 28px;
      text-align: center;
    }

    .btn-list {
      display: flex;
      justify-content: center;
      margin-top: 80px;
    }
  }
}
</style>
