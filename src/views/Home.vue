<template>
  <div class="home">
    <el-container>
        <!--   左侧菜单   -->
        <el-aside :width="asideFlag ? '160px' : '260px'">
          <div class="aside-header">
            <span>00</span>
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
            :class="asideFlag ? 'aa' : ''"
            class="handle iconfont icon-tuihui"
            @click="pushAndPull"
          ></i>
          <span>个人简介</span>
        </el-header>

        <!--  右侧主体  -->
        <el-main>
          <router-view></router-view>
        </el-main>

        <!--  右侧底部   -->
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuBar from "@/components/MenuBar";

export default {
  name: "Home",
  components: {
    MenuBar,
  },
  data() {
    return {
      asideFlag: true,
      menuList:[
        {id: '1', menuTo: '/basicInfo', menuFlag: true, menuName: '基本信息',icon:'icon-nan'},
        {id: '2', menuTo: '/professionalSkill', menuFlag: false, menuName: '专业技能',icon:'icon-gongzuo'},
        {id: '3', menuTo: '/trackRecord', menuFlag: false, menuName: '工作履历',icon:'icon-gongzuojingyan'},
        {id: '4', menuTo: '/projectExperience', menuFlag: false, menuName: '项目履历',icon:'icon-EC_gerenwengao-gerenjianli'}
      ]
    };
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
      .aa {
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
  transition: width 1s;
  .aside-header{
    width: 100%;
    height: 60px;
    background-color: #fff;
  }
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;

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
