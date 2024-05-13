<template>
  <div class="flex h-full flex-col gap-4">
    <slot name="topOperation"></slot>
    <div class="min-h-0 w-full flex-1" ref="tableRef">
      <slot name="table" :height="height"></slot>
    </div>
    <div class="flex items-center justify-between">
      <span>共{{ total }}条数据</span>
      <qu-page
        :total="total"
        show-sizer
        :current="page"
        :page-size="pageSize"
        @on-change="handlePageChange"
        @on-page-size-change="handlePageSizeChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import useTableHeight from "@/hooks/useTableHeight"
  import { ref } from "vue"
  const tableRef = ref()
  const height = useTableHeight(tableRef)
  const page = ref(1)
  const pageSize = ref(10)
  const total = ref(100)
  const emits = defineEmits(["getData"])
  const handlePageChange = (pageNum: number) => {
    page.value = pageNum
    emits("getData")
  }
  const handlePageSizeChange = (size: number) => {
    pageSize.value = size
    console.log(size)
    emits("getData")
  }
  const getParams = () => {
    return {
      page: page.value,
      pageSize: pageSize.value,
      total: total.value
    }
  }
  const setParams = ({
    totalCount,
    pageNum,
    size
  }: {
    totalCount?: number
    pageNum?: number
    size?: number
  }) => {
    if (totalCount) {
      total.value = totalCount
    }
    if (pageNum) {
      page.value = pageNum
    }
    if (size) {
      pageSize.value = size
    }
  }
  defineExpose({ getParams, setParams })
</script>

<style lang="scss"></style>
