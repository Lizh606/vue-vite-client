<template>
  <div class="flex items-center justify-between">
    <qu-button color="#0095B6">
      <div class="flex items-center gap-2">
        <SvgIcon name="review"></SvgIcon>
        批量终审通过
      </div>
    </qu-button>
    <div class="flex items-center gap-4">
      <qu-checkbox v-model="isPendingBox">待定箱</qu-checkbox>
      <QueryPanel ref="panelRef">
        <template #panel>
          <qu-form
            ref="formCustom"
            :model="form"
            :rules="[]"
            :label-width="110"
          >
            <qu-form-item label="项目名称">
              <qu-input v-model="form.projectName" class="w-72"></qu-input>
            </qu-form-item>
            <qu-form-item label="申报年度">
              <qu-input v-model="form.year" class="w-72"></qu-input>
            </qu-form-item>
            <qu-form-item label="申报单位名称">
              <qu-input v-model="form.year" class="w-72"></qu-input>
            </qu-form-item>
            <qu-form-item label="项目类型">
              <qu-input v-model="form.year" class="w-72"></qu-input>
            </qu-form-item>
            <qu-form-item label="项目状态">
              <qu-input v-model="form.year" class="w-72"></qu-input>
            </qu-form-item>
            <qu-form-item label="市级评优城市">
              <qu-input v-model="form.year" class="w-72"></qu-input>
            </qu-form-item>
            <qu-form-item label="市级评优等级">
              <qu-input v-model="form.year" class="w-72"></qu-input>
            </qu-form-item>
            <qu-form-item>
              <div class="flex justify-end gap-4">
                <qu-button @click="panelRef.cancelPanel()">取消</qu-button>
                <qu-button color="#0095B6" @click="handleQuery">确定</qu-button>
              </div>
            </qu-form-item>
          </qu-form>
        </template>
      </QueryPanel>
    </div>
  </div>
</template>

<script setup lang="ts">
  import QueryPanel from "@/components/queryPanel/index.vue"
  import SvgIcon from "@/components/svgIcon/SvgIcon.vue"
  import { ref } from "vue"
  const isPendingBox = ref(false)
  const form = ref({
    projectName: "",
    year: ""
  })
  const panelRef = ref()
  const emits = defineEmits(["search"])
  const handleQuery = () => {
    emits("search", form.value)
  }
</script>

<style lang="scss" scoped>
  :deep(.qu-checkbox) {
    margin-right: 8px;
  }
  :deep(.qu-checkbox-checked) {
    .qu-checkbox-inner {
      border-color: #0095b6;
      background-color: #0095b6;
    }
  }
</style>
