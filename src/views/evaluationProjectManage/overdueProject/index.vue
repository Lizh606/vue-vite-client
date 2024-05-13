<template>
  <div class="flex h-full flex-col gap-4">
    <TableLayout ref="layoutRef" @getData="getTableData">
      <template #topOperation>
        <TopOperation @search="handleSearch"></TopOperation>
      </template>
      <template #table="tableProps">
        <qu-table
          border
          :columns="tableColumns"
          :data="tableData"
          :height="tableProps.height"
        >
          <template #action="{ row }">
            <qu-radio-group v-model="row.isAllow">
              <qu-radio :label="true">是</qu-radio>
              <qu-radio :label="false">否</qu-radio>
            </qu-radio-group>
          </template>
        </qu-table>
      </template>
    </TableLayout>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue"
  import TableLayout from "../layout/TableLayout.vue"
  import TopOperation from "./components/TopOperation.vue"
  const layoutRef = ref()
  const tableColumns = ref([
    {
      title: "",
      type: "index",
      width: 80
    },
    {
      title: "申报年度",
      key: "age",
      width: 120
    },
    {
      title: "项目类型",
      key: "address"
    },
    {
      title: "项目名称",
      key: "age",
      minWidth: 200
    },
    {
      title: "批复（鉴定）部门",
      key: "age"
    },
    {
      title: "批复（鉴定）时间",
      key: "age"
    },
    {
      title: "是否允许提交",
      slot: "action"
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
  const api = (params: any) => {
    console.log(params)

    return [
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
    ]
  }
  const handleSearch = ({
    year,
    projectName
  }: {
    year: string
    projectName: string
  }) => {
    console.log(layoutRef.value.getParams())

    console.log(year, projectName)
  }
  const getTableData = () => {
    console.log(layoutRef.value.getParams())
    const params = layoutRef.value.getParams()
    api(params)
  }
</script>

<style lang="scss" scoped>
  @import "../styles/table.scss";
</style>
