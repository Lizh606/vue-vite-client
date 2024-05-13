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
            <div
              v-if="row.isAllow"
              @click="handleClickInfo"
              class="flex cursor-pointer items-center gap-2 rounded bg-[#E6F4F8] px-4 py-1"
            >
              <SvgIcon name="detail"></SvgIcon>
              <span class="whitespace-nowrap text-[#4D5254]">详情</span>
            </div>
            <div
              v-else
              @click="handleClickReview"
              class="flex cursor-pointer items-center gap-2 rounded border border-solid border-[#0095B6] bg-[#E6F4F8] px-4 py-1 text-[#0095B6]"
            >
              <SvgIcon name="review"></SvgIcon>
              <span class="whitespace-nowrap">形式审查</span>
            </div>
          </template>
        </qu-table>
      </template>
    </TableLayout>
    <ProjectModal v-model="showReviewModel" :title="modalTitle"></ProjectModal>
  </div>
</template>

<script setup lang="ts">
  import SvgIcon from "@/components/svgIcon/SvgIcon.vue"
  import { ref } from "vue"
  import TableLayout from "../layout/TableLayout.vue"
  import ProjectModal from "./components/ProjectModal.vue"
  import TopOperation from "./components/TopOperation.vue"
  const layoutRef = ref()
  const tableColumns = ref([
    {
      title: "",
      type: "index",
      width: 80
    },
    {
      title: "编号",
      key: "age",
      width: 80
    },
    {
      title: "申报年度",
      key: "age",
      width: 120
    },
    {
      title: "项目类型",
      key: "address",
      width: 100
    },
    {
      title: "项目名称",
      key: "age",
      minWidth: 200
    },
    {
      title: "申报单位名称",
      key: "age",
      width: 120
    },
    {
      title: "批复（鉴定）部门",
      key: "age",
      width: 160
    },
    {
      title: "参加市级评优城市",
      key: "age",
      width: 160
    },
    {
      title: "市级评优等级",
      key: "age",
      width: 160
    },
    {
      title: "申报时间",
      key: "age",
      width: 100
    },
    {
      title: "状态",
      key: "age",
      width: 80
    },
    {
      title: "操作",
      width: 160,
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

  const showReviewModel = ref(false)
  const modalTitle = ref("形式审查")
  const handleClickReview = () => {
    showReviewModel.value = true
    modalTitle.value = "形式审查"
  }
  const handleClickInfo = () => {
    showReviewModel.value = true
    modalTitle.value = "申报信息详情"
  }
</script>

<style lang="scss" scoped>
  @import "../styles/table.scss";
</style>
