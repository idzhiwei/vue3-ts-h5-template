<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { config } from "@/config"

export default defineComponent({
  name: 'App',
  setup() {
    console.log('环境配置', config)
  }
})
</script>
<style lang="scss"></style>
