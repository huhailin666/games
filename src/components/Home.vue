<template>
  <div>
    <div class="container">
      <h1>请选择你想玩的游戏</h1>
      <a class="button" href="#/card" @mouseenter="xxx=false">蜘蛛纸牌</a>
      <a class="button" href="#/mine" @mouseenter="xxx=true">扫雷</a>
      <div class="img" :class="{xxx:xxx}">
        <div class="img-cotainer">
          <a href="#/card">
            <img src="../../static/images/card.jpg" alt>
          </a>
          <a href="#/mine">
            <img src="../../static/images/mine.jpg" alt>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      xxx: true
    };
  }
};
</script>
<style lang="less" scoped>
.container {
  background: #eee;
  text-align: center;
  vertical-align: center;
  min-height: 100vh;
  h1 {
    border-bottom: 1px solid red;
    padding: 20px 0;
    box-shadow: -3px 9px 3px -3px rgba(210, 91, 91, 0.75);
    margin-bottom: 20px;
  }
  .button {
    display: inline-block;
    font-size: 20px;
    margin: 10px;
    background: #69cc69;
    color: #fff;
    // border: 1px solid #ccc;
    padding: 10px 20px;
    margin: 10px 60px;
    border-radius: 30px;
    width: 200px;
    box-shadow: 0px 0px 3px 5px rgba(222, 204, 204, 0.75);
  }
  .img {
    width: 500px;
    height: 500px;
    margin: 0 auto;
    border-radius: 20px;
    box-shadow: 3px 3px 11px 1px rgba(155, 215, 150, 0.75);
    overflow: hidden;
    .img-cotainer {
      width: 200%;
      height: 100%;
      img {
        width: 497px;
        height: 100%;
      }
              transition: all 0.5s;
        transform: translateX(0);

    }
    &.xxx {
      .img-cotainer {

        transform: translateX(-50%);
      }
    }
  }
}
</style>

