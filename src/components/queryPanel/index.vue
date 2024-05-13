<template>
  <div class="relative">
    <qu-button
      @click="showPanel = !showPanel"
      class="border border-solid border-[#0095B6] bg-[#CCEAF0] text-[#333A3B] hover:border-[#0095B6] hover:bg-[#CCEAF0] hover:text-[#333A3B]"
    >
      <div class="flex items-center justify-around gap-1">
        <qu-icon type="ios-search"></qu-icon>
        <span>查询</span>
        <qu-icon type="ios-arrow-down"></qu-icon>
      </div>
    </qu-button>
    <div
      class="panel absolute right-0 top-12 z-10 rounded bg-white p-6"
      v-show="showPanel"
    >
      <slot name="panel"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue"
  const showPanel = ref(false)
  const cancelPanel = () => {
    showPanel.value = false
  }
  defineExpose({ cancelPanel })
</script>

<style lang="scss" scoped>
  .panel {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.16);
  }
</style>
