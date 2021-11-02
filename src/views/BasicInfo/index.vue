<template>
  <!-- 个人信息 -->
  <div class="basic-info">
    <!-- 个人基本信息 -->
    <div class="b-i-left">
      <Title title="基本信息" />
      <div class="b-i-l-user">
        <div class="u-photograph">
          <el-avatar
            :size="130"
            :src="require('../../assets/49.jpg')"
            shape="square"
          ></el-avatar>
          <div class="u-basic">
            <el-descriptions title="卢大伟">
              <el-descriptions-item label="籍 贯">河南</el-descriptions-item>
              <el-descriptions-item label="性 别">男</el-descriptions-item>
              <el-descriptions-item label="学 历">本科</el-descriptions-item>
              <el-descriptions-item label="婚 况">已婚</el-descriptions-item>
              <el-descriptions-item label="工作经验">4.5</el-descriptions-item>
              <el-descriptions-item label="求职意向"
                >Web开发</el-descriptions-item
              >
              <el-descriptions-item label="手机号码"
                >18537630668</el-descriptions-item
              >
              <el-descriptions-item label="邮 箱"
                >ludawei890@126.com</el-descriptions-item
              >
              <el-descriptions-item label="微 信 号"
                >hnddwfn</el-descriptions-item
              >
            </el-descriptions>
          </div>
        </div>
        <div class="u-desc">
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :color="activity.color"
            >
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>

    <!-- 个人专业技能 -->
    <div class="b-i-right">
      <Title title="专业技能" />
      <div ref="b_i_l_skill" class="b-i-l-skill"></div>
    </div>
  </div>
</template>

<script>
import { MoreFilled } from "@element-plus/icons";
import Title from "@/components/Title";
import { chart } from "@/utils";
import * as echarts from "echarts";
export default {
  name: "BasicInfo",
  data() {
    return {
      activities: [
        {
          content:
            "熟练掌握 HTML5 标签和 CSS3 运⽤用以及新增的属性进⾏页面重构优化，以及CSS 的预编译器：scss、less、stylus 等",
          color: "#409eff",
          icon: MoreFilled,
        },
        {
          content:
            "熟练运⽤JavaScript、jQuery、 Vue ，擅⻓ Vue 全家桶（Vue/Vuex/Axios/Router） + ElementUI 进⾏项⽬的开发",
          color: "#0bbd87",
        },
        {
          content: "熟练使⽤ Sublime、VS Code、WebStorm 等开发工具",
          color: "#409eff",
        },
        {
          content: "熟练使⽤ Git Yarn Npm 等代码管理开发工具",
          color: "#0bbd87",
        },
        {
          content: " 了解 ES6 语法，并结合实际项目进行使用开发",
          color: "#409eff",
        },
        {
          content: "了解 React 框架，小程序开发，能进行基础开发",
          color: "#0bbd87",
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
      dom: "",
    };
  },
  components: {
    Title,
  },
  mounted() {
    let _this = this;
    //获取DOM
    this.dom = this.$refs.b_i_l_skill;
    // 初始化加载图表
    this.drawChart();
    //页面窗口发生变化时重新加载
    window.onresize = function () {
      _this.drawChart();
    };
  },
  methods: {
    // 加载图表
    drawChart() {
      let myChart = echarts.init(this.dom);
      //报错setOption 调用时机限制，先擦除
      myChart.clear();
      myChart.setOption(chart(this.chartData));
    },
  },
};
</script>

<style lang="scss" scoped>
.basic-info {
  height: 100%;
  max-height: calc(100% - 80px);
  padding: 0 20px;
  display: flex;

  .b-i-left {
    width: 60%;
    height: 100%;
    margin-right: 20px;
    padding: 0 10px;
    border: 1px solid #ccc;

    .b-i-l-user {
      width: 100%;
      height: calc(100% - 50px);
      padding: 5px;

      .u-photograph {
        height: 35%;
        display: flex;

        .el-avatar {
          width: 130px;
          margin-right: 10px;
        }

        .u-basic {
          flex: 1;
          padding: 0 10px;
        }
      }

      .u-desc {
        padding: 0 30px;
      }
    }
  }

  .b-i-right {
    height: 100%;
    flex: 1;

    border: 1px solid #ccc;

    .b-i-l-skill {
      width: 100%;
      height: calc(100% - 50px);
    }
  }
}

.el-timeline {
  text-align: left;
}
</style>
