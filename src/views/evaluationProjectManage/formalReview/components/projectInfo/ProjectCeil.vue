<template>
  <div :class="`ceil bg-[#EBF7F9] text-end ${notHalf ? 'w-1/4' : 'flex-1'}`">
    <span class="h-full text-[#CC000E]" v-if="ceilData?.isRequired">*</span>
    {{ ceilData.name }}
  </div>
  <div class="ceil flex-1">
    {{ ceilData.value }}
  </div>
</template>

<script setup lang="ts">
  import type { FormalReviewCeilData } from "@/models/evaluationProjectManage"

  const { ceilData, notHalf } = defineProps<{
    ceilData: FormalReviewCeilData
    notHalf?: boolean
  }>()
</script>

<style lang="scss" scoped>
  .ceil {
    @apply border-b border-r border-solid border-[#CCEAF0] px-4 py-1;
  }
</style>
