<template>
  <div class="flex h-full flex-col overflow-hidden">
    <GlobalHeader></GlobalHeader>
    <div class="flex min-h-0 flex-1">
      <GlobalMenu></GlobalMenu>
      <div class="min-w-0 flex-1">
        <GlobalContent></GlobalContent>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import GlobalContent from "../global/GlobalContent.vue"
  import GlobalHeader from "../global/GlobalHeader.vue"
  import GlobalMenu from "../global/GlobalMenu.vue"
</script>

<style lang="scss"></style>
