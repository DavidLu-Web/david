<template>
  <div class="title">
    <span class="iconfont icon-fuzhushuxian"> {{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  height: 30px;
  padding: 10px 0;
  text-align: left;
  line-height: 30px;
  font-size: 10px;
  font-weight: 600;
  border-bottom: 1px dashed #ccc;
}
</style>
