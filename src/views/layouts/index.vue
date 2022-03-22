<!-- layouts -->
<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer" v-if="$route.meta.showTab">
      <!-- 这里@change默认绑定在了van-tabbar上，参考vue的$attr -->
      <TabBar :tabbars="tabbars" @change="handleChange" />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import TabBar, { ITabList } from '@/components/TabBar.vue'
import { useRoute } from 'vue-router'
interface ILayoutState {
  tabbars: Array<ITabList>
  // defaultActive: number
}
export default defineComponent({
  name: 'layouts',
  components: {
    TabBar
  },
  setup() {
    const route = useRoute()
    const state: ILayoutState = reactive({
      tabbars: [
        { title: '首页', to: { name: 'Home',path:'/home' }, icon: 'home',iconActive:'homeActive' },
        { title: '个人中心', to: { name: 'User',path:'/user' }, icon: 'user',iconActive:'userActive' }
      ],
      // defaultActive: computed(() => {
      //   return state.tabbars.findIndex((item: ITabList) => {
      //     return item.to.name === route.name
      //   })
      // })
    })
    const handleChange = (v: number) => {
      console.log('tab value:', v)
    }

    return {
      ...toRefs(state),
      handleChange
    }
  }
})
</script>
<style lang="scss" scoped>
.footer-callout {
  width: 100%;
  @include flexbox(center, center, row, nowrap);
  margin-top: 4px;
  margin-bottom: $margin-p;

  > img {
    width: 210px;
    height: auto;
  }
}
.app-container{
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  overflow-x: hidden;
  word-break : break-all;

  .layout-content{
    flex: auto;
  }

  .footer-callout{
    flex: none;
  }

  .layout-footer{
    flex: none;
  }
}
</style>
