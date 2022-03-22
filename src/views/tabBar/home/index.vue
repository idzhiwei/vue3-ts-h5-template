<!-- Home -->
<template>
  <van-cell-group>
    <van-cell v-for="item in list" icon="smile-o" :title="item" />
  </van-cell-group>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: { },
  setup: function() {
    const list = [
       "持续更新中",
       "配置多环境变量",
       "vw 适配方案",
       "VantUI 组件按需加载",
       "Scss 全局样式",
       "自定义 TabBar",
       "适配苹果底部安全距离",
       "使用 Mock 数据",
       "Axios 封装及接口管理",
       "Vuex 状态管理",
       "Vuex 持久化储存",
       "Vue-router",
       "Webpack 4 vue.config.js 基础配置",
       "配置 alias 别名",
       "配置 proxy 跨域",
       "配置 打包分析",
       "externals 引入 cdn 资源",
       "去掉 console.log",
       "splitChunks 单独打包第三方模块",
       "gzip 压缩",
       "uglifyjs 压缩",
       "eruda移动端调试",
       "动态设置 title",
       "本地存储 storage 封装",
       "配置 Jssdk"
    ]
    return {
      list
    };
  }
});
</script>

<style lang="scss" scoped>

</style>
