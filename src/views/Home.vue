<template>
  <div class="home">
    <el-container>
      <!--   左侧菜单   -->
      <el-aside :width="asideFlag ? '130px' : '200px'">
        <div class="date-time">
          <span>{{ time }}</span>
        </div>
        <div class="aside-nav">
          <MenuBar :menuList="menuList"></MenuBar>
        </div>
      </el-aside>

      <!--   右侧显示   -->
      <el-container>
        <!--  右侧头部   -->
        <el-header>
          <i
            :class="asideFlag ? 'active' : ''"
            class="handle iconfont icon-tuihui"
            @click="pushAndPull"
          ></i>
          <span>个人简历</span>
        </el-header>

        <!--  右侧主体  -->
        <el-main>
          <router-view></router-view>
        </el-main>

        <!--  右侧底部   -->
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuBar from "@/components/MenuBar";
import moment from "moment/moment";
export default {
  name: "Home",
  components: {
    MenuBar,
  },
  data() {
    return {
      asideFlag: true,
      time: "",
      menuList: [
        {
          id: "1",
          menuTo: "/basicInfo",
          menuFlag: true,
          menuName: "基本信息",
          icon: "icon-nan",
        },
        {
          id: "3",
          menuTo: "/trackRecord",
          menuFlag: false,
          menuName: "工作履历",
          icon: "icon-gongzuojingyan",
        },
        {
          id: "4",
          menuTo: "/projectExperience",
          menuFlag: false,
          menuName: "项目履历",
          icon: "icon-EC_gerenwengao-gerenjianli",
        },
        {
          id: "2",
          menuTo: "/randomChart",
          menuFlag: false,
          menuName: "随机图表",
          icon: "icon-gongzuo",
        },
      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.time = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    }, 1000);
  },
  methods: {
    pushAndPull() {
      this.asideFlag = !this.asideFlag;
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;

  .el-container {
    height: 100%;

    .el-aside {
      .date-time {
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #fff;
      }
    }

    .el-header {
      position: relative;
      background-color: #fff;

      .handle {
        width: 30px;
        height: 40px;
        line-height: 40px;
        position: absolute;
        left: 2px;
        top: 9px;
        background-color: #b3c0d1;
      }

      .active {
        -moz-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        transform: scaleX(-1);
      }
    }
  }
}

// Ui样式
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  //line-height: 200px;
  transition: width 0.3s;
}

.el-main {
  padding: 10px 0;
  color: var(--el-text-color-primary);
  text-align: center;
  background-color: #fff;
}

.el-footer {
  height: 20px;
  background-color: #fff;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
