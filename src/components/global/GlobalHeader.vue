<template>
  <div class="header flex h-20 w-full items-center justify-between px-6 py-5">
    <span class="text-[36px] font-bold text-[#007F9B]">{{ appName }}</span>
    <div class="flex items-center gap-4 text-[#333A3B]">
      <div>当前用户：江苏省自然资源厅_管理用户</div>
      <div class="flex cursor-pointer items-center gap-2">
        <SvgIcon name="user-book"></SvgIcon>
        <span>用户手册</span>
      </div>
      <div class="flex cursor-pointer items-center gap-2">
        <SvgIcon name="logout" class="text-xl"></SvgIcon>
        <span>退出登陆</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useAppStore } from "@/stores/app"
  import { storeToRefs } from "pinia"
  import SvgIcon from "../svgIcon/SvgIcon.vue"
  const appStore = useAppStore()
  const { appName } = storeToRefs(appStore)
</script>

<style lang="scss">
  .header {
    background-image: url("@/assets/images/header-bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    object-fit: contain;
  }
</style>
