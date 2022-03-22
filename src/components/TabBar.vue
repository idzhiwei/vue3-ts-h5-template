<!-- TabBar -->
<template>
  <van-tabbar v-model="active" active-color="#ef502f" fixed inactive-color="#000" route>
    <van-tabbar-item
      v-for="(item, index) in tabbars"
      :key="index"
      :to="item.to.path"
      replace
    >
      <span> {{ item.title }}</span>
      <template #icon="props">
        <img :src="props.active ? IconsTheme[item.iconActive] : IconsTheme[item.icon]" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref } from "vue";
import { useStore } from "vuex";
import { IGlobalState } from "@/store";

export interface ITabList {
  title: string // 标题
  to: { name: string,path:string } // url路径
  icon: string // 图标
  iconActive: string // 图标
}

export default defineComponent({
  name: "TabBar",
  props: {
    tabbars: {
      type: Array as PropType<ITabList[]>, // 类型断言
      default: () => {
        return [];
      }
    }
  },
  setup(props) {
    const active = ref(0);
    const IconsTheme = computed(() => {
      return {
        home: require("@/assets/img/tabbar/home.svg"),
        homeActive: require("@/assets/img/tabbar/home-active.svg"),
        user: require("@/assets/img/tabbar/user.svg"),
        userActive: require("@/assets/img/tabbar/user-active.svg"),
      };
    });
    onMounted(() => {

    });
    return {
      active,
      IconsTheme
    };
  }
});
</script>
<style lang="scss" scoped></style>
