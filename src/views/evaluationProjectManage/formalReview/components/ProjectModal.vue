<template>
  <qu-modal
    v-model="modal"
    :title="title"
    :mask="false"
    width="1000"
    closable
    :footer-hide="title !== '形式审查'"
  >
    <ProjectInfo class="max-h-[60vh] overflow-auto"></ProjectInfo>
    <template #footer>
      <div class="mx-24 flex items-center justify-center gap-4">
        <qu-button
          v-for="(item, index) in btnList"
          :key="index"
          :color="item.color"
          @click="item.clickEvent"
        >
          {{ item.name }}
        </qu-button>
      </div>
    </template>
  </qu-modal>
</template>

<script setup lang="ts">
  import ProjectInfo from "./projectInfo/index.vue"
  const { title } = defineProps<{ title: string }>()
  const modal = defineModel<boolean>({ default: false, required: true })
  const btnList = [
    {
      name: "退回",
      color: "#CC000E",
      clickEvent: () => {
        console.log("退回")
      }
    },
    {
      name: "通过",
      color: "#008F3E",
      clickEvent: () => {
        console.log("通过")
      }
    },
    {
      name: "不通过",
      color: "#D63375",
      clickEvent: () => {
        console.log("不通过")
      }
    },
    {
      name: "待定",
      color: "#D69533",
      clickEvent: () => {
        console.log("待定")
      }
    },
    {
      name: "项目审查",
      color: "#0095B6",
      clickEvent: () => {
        console.log("项目审查")
      }
    }
  ]
</script>

<style lang="scss"></style>
