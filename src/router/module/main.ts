import Main from "@/views/main/index.vue"

export default [
  {
    path: "/main",
    name: "main",
    redirect: "/main/EstablishmentManage/UnitInfoReview",
    component: Main,
    children: [
      {
        path: "/main/EstablishmentManage",
        name: "EstablishmentManage",
        meta: {
          navTitle: "编制单位管理",
          icon: ""
        },
        children: [
          {
            path: "/main/EstablishmentManage/UnitInfoReview",
            name: "UnitInfoReview",
            component: () =>
              import("@/views/establishmentManage/UnitInfoReview.vue"),
            meta: {
              navTitle: "单位信息终审"
            }
          },
          {
            path: "/main/EstablishmentManage/UnitChangeReview",
            name: "UnitChangeReview",
            component: Main,
            meta: {
              navTitle: "单位变更终审"
            }
          },
          {
            path: "/main/EstablishmentManage/BlackListManage",
            name: "BlackListManage",
            component: Main,
            meta: {
              navTitle: "黑名单"
            }
          }
        ]
      },
      {
        path: "/main/EvaluationProjectManage",
        name: "EvaluationProjectManage",
        meta: {
          navTitle: "评优项目管理",
          icon: ""
        },
        children: [
          {
            path: "/main/EvaluationProjectManage/OverdueProject",
            name: "OverdueProject",
            component: () =>
              import(
                "@/views/evaluationProjectManage/overdueProject/index.vue"
              ),
            meta: {
              navTitle: "超期未提交项目"
            }
          },
          {
            path: "/main/EvaluationProjectManage/FormalReview",
            name: "FormalReview",
            component: () =>
              import("@/views/evaluationProjectManage/formalReview/index.vue"),
            meta: {
              navTitle: "形式审查"
            }
          },
          {
            path: "/main/EvaluationProjectManage/ReviewManage",
            name: "ReviewManage",
            component: Main,
            meta: {
              navTitle: "评审管理"
            }
          },
          {
            path: "/main/EvaluationProjectManage/AwardManage",
            name: "AwardManage",
            component: Main,
            meta: {
              navTitle: "获奖管理"
            }
          },
          {
            path: "/main/EvaluationProjectManage/AwardAnnouncement",
            name: "AwardAnnouncement",
            component: Main,
            meta: {
              navTitle: "获奖公示"
            }
          },
          {
            path: "/main/EvaluationProjectManage/ProjectQuery",
            name: "ProjectQuery",
            component: Main,
            meta: {
              navTitle: "项目查询"
            }
          }
        ]
      }
    ]
  }
]
