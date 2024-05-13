<template>
  <div class="flex flex-col border-l border-t border-solid border-[#CCEAF0]">
    <div v-for="(i, index) in contentData" :key="index" class="flex">
      <template v-if="i.length > 1">
        <div class="flex flex-1" v-for="(j, idx) in i" :key="idx">
          <ProjectCeil :ceilData="j"></ProjectCeil>
        </div>
      </template>

      <div v-else class="flex w-full">
        <ProjectCeil :ceilData="i[0]" :notHalf="i[0].notHalf"></ProjectCeil>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { FormalReviewContentData } from "@/models/evaluationProjectManage"
  import ProjectCeil from "./ProjectCeil.vue"
  const { contentData } = defineProps<{
    contentData: FormalReviewContentData[]
  }>()
</script>

<style lang="scss"></style>
