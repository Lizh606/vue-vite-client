<template>
  <div class="flex h-full flex-col gap-4 bg-[#CCEAF0] px-4 pb-4 pt-7">
    <span class="text-2xl font-medium text-[#333A3B]">{{
      route.meta.navTitle
    }}</span>
    <router-view v-slot="{ Component }" class="min-h-0 flex-1 bg-white p-4">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
  import { useRoute } from "vue-router"
  const route = useRoute()
</script>

<style scoped></style>
