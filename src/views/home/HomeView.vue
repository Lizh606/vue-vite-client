<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-4">
      Pinia: <span>{{ count }}. {{ doubleCount }}</span> <button @click="increment">+</button>
    </div>
    <div>
      quark-next：
      <qu-button-group>
        <qu-button>Cancel</qu-button>
        <qu-button type="primary">Confirm</qu-button>
      </qu-button-group>
    </div>
    <SvgIcon name="logo"></SvgIcon>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { count, doubleCount } = storeToRefs(store)
const { increment } = store
</script>

<style lang="scss"></style>
