<template>
  <div class="flex justify-end">
    <QueryPanel ref="panelRef">
      <template #panel>
        <qu-form ref="formCustom" :model="form" :rules="[]" :label-width="80">
          <qu-form-item label="项目名称">
            <qu-input v-model="form.projectName" class="w-72"></qu-input>
          </qu-form-item>
          <qu-form-item label="申报年度">
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
</template>

<script setup lang="ts">
  import QueryPanel from "@/components/queryPanel/index.vue"
  import { ref } from "vue"
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

<style lang="scss"></style>
