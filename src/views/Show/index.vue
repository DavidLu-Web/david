<template>
  <div class="show">
    <div :style="{ paddingRight: dddd }" class="crosswise-chart">
      <div class="top">
        <span class="title">生存金</span>
        <div class="box">
          <div :style="{ width: (top / total) * 100 + '%' }" class="line">
            <span ref="as" class="price">{{ top }}</span>
          </div>
        </div>
      </div>

      <!--      <div-->
      <!--        :style="{ width: (center / total) * 100 + '%' }"-->
      <!--        class="center"-->
      <!--      ></div>-->
      <!--      <div-->
      <!--        :style="{ width: (bottom / total) * 100 + '%' }"-->
      <!--        class="bottom"-->
      <!--      ></div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Show",
  data() {
    return {
      top: 342880,
      center: 1880,
      bottom: 500,
      total: 342880,
      dddd: "",
    };
  },
  mounted() {
    this.dddd = this.$refs.as.clientWidth + 10 + "px";
    console.log(this.$refs.as.clientWidth);
  },
};
</script>

<style lang="scss" scoped>
.show {
  width: 100%;
  height: 100%;
  margin: 0 10px;
  .crosswise-chart {
    width: 40%;
    height: 40%;
    padding: 10px 40px 10px 10px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;

    .title {
      width: 50px;
      height: 30px;
      margin-right: 5px;
      line-height: 30px;
    }

    .top {
      height: 30px;
      display: flex;
      .box {
        flex: 1;
        .line {
          width: 100%;
          height: 30px;
          border-radius: 5px;
          background-color: #c03030;
          position: relative;
          .price {
            padding-left: 5px;
            line-height: 30px;
            position: absolute;
            left: 100%;
          }
        }
      }
    }
    .center {
      height: 30px;
      margin: 10px 0;
      background-color: #878a31;
    }
    .bottom {
      height: 30px;
      background-color: #1834c5;
    }
  }
}
</style>
