<template>
  <div class="random-chart">
    <div class="r-top">
      <div ref="t_map" class="t-map">dddd</div>
    </div>
    <div class="r-bottom">
      <div class="mock">Mock数据</div>
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
import $axios from "axios";
import { chart } from "@/utils";
import * as echarts from "echarts";
export default {
  name: "RandomChart",
  data() {
    return {
      dom: "", //DOM节点
      timer: "", //定时器id
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
      chartData: [
        { value: 30, name: "Vue" },
        { value: 10, name: "H5/CSS3/ES6" },
        { value: 5, name: "less/scss/stylus" },
        { value: 5, name: "jQuery" },
        { value: 15, name: "ElementUI/Vant" },
        { value: 10, name: "git/yarn/npm" },
        { value: 15, name: "Axios/Moment/Blob/Pdf" },
        { value: 10, name: " RuoYi/vue-admin-element" },
      ],
    };
  },
  created() {},
  mounted() {
    let _this = this;
    //获取dom
    this.dom = this.$refs.t_map;
    //初始化echarts
    this.drawChart();
    // 10秒刷新
    this.timer = setInterval(() => {
      //模拟重新生成展示数据
      this.chartData = [
        { value: this.randomValues(), name: "H5/CSS3/ES6" },
        { value: this.randomValues(), name: "less/scss/stylus" },
        { value: this.randomValues(), name: "Vue" },
        { value: this.randomValues(), name: "jQuery" },
        { value: this.randomValues(), name: "ElementUI/Vant" },
        { value: this.randomValues(), name: "git/yarn/npm" },
        { value: this.randomValues(), name: "Axios/Moment/Blob/Pdf" },
        { value: this.randomValues(), name: " RuoYi/vue-admin-element" },
      ];
      this.drawChart();
      this.refreshData();
    }, 10000);

    //页面窗口发生变化时重新加载
    window.onresize = function () {
      _this.drawChart();
    };
  },
  unmounted() {
    //组件卸载，清除定时器
    clearInterval(this.timer);
  },
  methods: {
    // 加载图表
    drawChart() {
      let myChart = echarts.init(this.dom);
      //报错setOption 调用时机限制，先擦除
      myChart.clear();
      myChart.setOption(chart(this.chartData));
    },
    // 获取随机数值
    randomValues() {
      return Math.floor(Math.random() * (1 - 100) + 100);
    },
    //10秒刷新表格数据
    refreshData() {
      $axios.get("http://localhost/user").then((res) => {
        const { status, data } = res;
        if (status === 200) {
          this.tableData = data.userTableData;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.random-chart {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .r-top {
    height: 100%;
    flex: 1;
    .t-map {
      width: 100%;
      height: 100%;
    }
  }
  .r-bottom {
    position: relative;
    flex: 1;
    .mock {
      width: 150px;
      height: 50px;
      position: absolute;
      left: 20px;
      top: -80px;
      font-size: 20px;
      color: #aa759f;
    }
  }
}
</style>
