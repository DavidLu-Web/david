<template>
  <div
    v-for="i in newMenuList"
    :key="i.id"
    :class="i.menuFlag ? 'active' : ''"
    class="menu-bar"
    @click="cutMenu(i.id, i.menuTo)"
  >
    <i :class="i.icon" class="iconfont"></i>
    <span>{{ i.menuName }}</span>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
  props: ["menuList"],
  data() {
    return {
      newMenuList: [],
    };
  },
  created() {
    this.newMenuList = this.menuList;
  },
  methods: {
    //切换菜单并改变菜单状态
    cutMenu(id, menuTo) {
      this.newMenuList = this.newMenuList.map((item) => {
        item.menuFlag = item.id === id;
        return item;
      });
      this.$router.push(menuTo);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-bar {
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #000;
  transition: all 0.3s;

  i {
    width: 30px;
    height: 30px;
    font-size: 25px;
    margin-right: 5px;
  }
}
.menu-bar:hover {
  background-color: rgba(0, 0, 0, 0.2);
  color: #274ea3;
  cursor: pointer;
  transition: all 0.3s;
}

.active {
  background-color: rgba(0, 0, 0, 0.2);
  color: #274ea3;
  transition: all 0.3s;
}
</style>
