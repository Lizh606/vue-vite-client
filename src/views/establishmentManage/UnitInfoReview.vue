<template>
  <div>{{ 123 }}</div>
</template>

<script setup lang="ts">
  import { useRoute } from "vue-router"

  const route = useRoute()
  console.log(route)
</script>

<style lang="scss"></style>
