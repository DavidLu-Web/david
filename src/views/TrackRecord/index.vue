<template>
  <div class="track-record">
    <header>
      <Title title="工作履历" />
    </header>
    <div class="t-record">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column align="center" label="公司" prop="companyName" />
        <el-table-column align="center" label="入职时间" prop="startEndDate" />
        <el-table-column align="center" label="部门" prop="department" />
        <el-table-column align="center" label="岗位" prop="post" />
        <el-table-column align="center" label="项目" prop="project" />
        <el-table-column align="center" label="项目类型" prop="projectType">
          <template v-slot:default="{ row }">
            <el-tag type="success">{{ row.projectType }}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";

export default {
  name: "TrackRecord",
  data() {
    return {
      tableData: [
        {
          id: 1,
          companyName: "上海炽聚网络科技有限公司",
          startEndDate: "2020/09-2021/10",
          department: "技术部",
          post: "Web前端开发",
          project: "回访系统",
          projectType: "Vue",
        },
        {
          id: 2,
          companyName: "上海炽聚网络科技有限公司",
          startEndDate: "2020/09-2021/10",
          department: "技术部",
          post: "Web前端开发",
          project: "自助机器人H5",
          projectType: "Vue",
        },
        {
          id: 3,
          companyName: "上海炽聚网络科技有限公司",
          startEndDate: "2020/09-2021/10",
          department: "技术部",
          post: "Web前端开发",
          project: "经代查询系统",
          projectType: "jQuery",
        },
        {
          id: 4,
          companyName: "南京软智信息技术有限公司",
          startEndDate: "2018/03-2020/08",
          department: "项目部开发部",
          post: "前端开发工程师",
          project: "医源管理平台",
          projectType: "Vue",
        },
        {
          id: 5,
          companyName: "南京软智信息技术有限公司",
          startEndDate: "2018/03-2020/08",
          department: "项目部开发部",
          post: "前端开发工程师",
          project: "中海油团险",
          projectType: "jQuery",
        },
      ],
    };
  },
  components: {
    Title,
  },
};
</script>

<style lang="scss" scoped>
.track-record {
  .t-record {
    padding: 5px 10px;
  }
}
</style>
