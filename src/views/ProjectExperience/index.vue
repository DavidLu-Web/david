<template>
  <div class="project-experience">
    <header>
      <Title title="项目履历" />
    </header>
    <div class="p-record">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          align="center"
          label="项目"
          prop="project"
          width="130px"
        />
        <el-table-column
          align="center"
          label="项目类型"
          prop="projectType"
          width="130px"
        />
        <el-table-column
          align="center"
          label="项目日期"
          prop="startEndDate"
          width="130px"
        />
        <el-table-column
          align="center"
          label="角色"
          prop="role"
          width="130px"
        />
        <el-table-column align="left" label="项目描述" prop="desc" />
      </el-table>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";
export default {
  name: "ProjectExperience",
  components: {
    Title,
  },
  data() {
    return {
      tableData: [
        {
          id: 1,
          startEndDate: "--",
          project: "回访系统",
          projectType: "Vue",
          role: "开发",
          desc: "用于客户电话回访系统，坐席人员根据保单获取用户相关保单信息进行电话回访的后台管理系统。",
        },
        {
          id: 2,
          startEndDate: "--",
          project: "自助机器人H5",
          projectType: "Vue",
          role: "开发",
          desc: "项目面向公司内部员工使用，员工查询内部相关操作流程等，自助处理：账号查询、解锁、设备查询、IP查询等问题",
        },
        {
          id: 3,
          startEndDate: "--",
          project: "医源管理平台",
          projectType: "Vue",
          role: "开发",
          desc: "基于Vue2.0的医疗管理系统，主要包括医院人员权限管理，医院的各种介绍，线上预约管理以及住院各项。",
        },
        {
          id: 4,
          startEndDate: "--",
          project: "乐享生活",
          projectType: "jQuery",
          role: "开发",
          desc: " 一个类似于淘宝的网上商城，推广分享，是一款品质生活的倡导者，精选购物的网站。（推广）",
        },
        {
          id: 5,
          startEndDate: "--",
          project: "中海油团险",
          projectType: "jQuery",
          role: "功能开发&维护",
          desc: "中海油集团下属员工查询公司购买的保险渠道，用于购买,查询，理赔等操作",
        },
        {
          id: 6,
          startEndDate: "--",
          project: "经代查询系统",
          projectType: "jQuery",
          role: "功能开发&维护",
          desc: "对接公司所有业务系统，仅用于业务查询，数据导出。",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
