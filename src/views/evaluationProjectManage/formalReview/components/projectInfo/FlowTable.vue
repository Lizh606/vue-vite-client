<template>
  <div>
    <qu-table border :columns="tableColumns" :data="tableData"> </qu-table>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue"

  const tableColumns = ref([
    {
      title: "项目状态",
      key: "age"
    },
    {
      title: "开始时间",
      key: "age"
    },
    {
      title: "结束时间",
      key: "address"
    },
    {
      title: "处理结果",
      key: "address"
    }
  ])
  const tableData = ref([
    {
      name: "John Brown",
      age: 18,
      address: "New York No. 1 Lake Park",
      date: "2016-10-03",
      isAllow: true
    },
    {
      name: "Jim Green",
      age: 24,
      address: "London No. 1 Lake Park",
      date: "2016-10-01",
      isAllow: false
    }
  ])
</script>

<style lang="scss" scoped>
  @import "@/views/evaluationProjectManage/styles/table.scss";
</style>
