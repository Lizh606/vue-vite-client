<template>
  <div class="flex flex-col">
    <div
      v-for="(item, index) in contentConfig"
      :key="index"
      class="flex flex-col gap-4 p-6"
    >
      <span
        class="border-l-2 border-solid border-[#0095B6] pl-2 text-xl font-medium text-[#0095B6]"
      >
        {{ item.name }}</span
      >
      <FlowTable v-if="item.isTable"></FlowTable>
      <ProjectContent :contentData="item.data" v-else></ProjectContent>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { FormalReviewContentConfig } from "@/models/evaluationProjectManage"
  import FlowTable from "./FlowTable.vue"
  import ProjectContent from "./ProjectContent.vue"
  const contentConfig: FormalReviewContentConfig[] = [
    {
      name: "申报信息",
      data: [
        [
          {
            name: "申报年度",
            value: "",
            isRequired: true
          },
          {
            name: "项目类型",
            value: "",
            isRequired: true
          }
        ],
        [
          {
            name: "项目名称",
            value: "",
            isRequired: true,
            notHalf: true
          }
        ],
        [
          {
            name: "申报项目合同名称",
            value: "",
            isRequired: true
          },
          {
            name: "申报项目合同编号",
            value: "",
            isRequired: true
          }
        ],
        [
          {
            name: "申报单位",
            value: ""
          },
          {
            name: "编制资质",
            value: ""
          }
        ],
        [
          {
            name: "批复（鉴定）机关",
            value: ""
          },
          {
            name: "批复（鉴定）时间",
            value: ""
          }
        ],
        [
          {
            name: "项目组成员",
            value: "",
            notHalf: true
          }
        ],
        [
          {
            name: "注册规划师名单",
            value: "",
            notHalf: true
          }
        ]
      ]
    },
    {
      name: "填报信息",
      data: [
        [
          {
            name: "填报更新时间",
            value: ""
          },
          {
            name: "填报单位",
            value: ""
          }
        ],
        [
          {
            name: "填报单位联系人",
            value: ""
          },
          {
            name: "联系电话",
            value: ""
          }
        ]
      ]
    },

    {
      name: "附件信息",
      data: [
        [
          {
            name: "项目申报表上传盖章扫描件和word文件",
            value: "",
            isRequired: true
          }
        ],
        [
          {
            name: "申报单位城乡规划编制资质证书的扫描件",
            value: "",
            isRequired: true
          }
        ],
        [
          {
            name: "法定规划批复文件或规划研究鉴定（审定）文件或自然资源和规划主管部门的盖章实施证明（实施效果照片（3张）扫描件）",
            value: "",
            isRequired: true
          }
        ]
      ]
    },
    {
      name: "其他信息",
      data: [
        [
          {
            name: "项目创新简介（限800字以内）",
            value: "",
            isRequired: true
          }
        ],
        [
          {
            name: "上传25页以内项目内容和特色简介 (PDF格式的PPT）",
            value: "",
            isRequired: true
          }
        ],
        [
          {
            name: "注",
            value:
              "建议包含主要图纸，合并在一个PDF文件中（40M以内），不得出现规划编制单位信息”"
          }
        ]
      ]
    },
    {
      name: "流程跟踪表",
      data: [],
      isTable: true
    }
  ]
</script>

<style lang="scss" scoped></style>
