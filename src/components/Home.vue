<template>
  <div>
    <div class="container">
      <h1>请选择你想玩的游戏</h1>
        <a href="#/card">蜘蛛纸牌</a>
        <a href="#/mine">扫雷</a>
      <div class="img">
        <a href="#/card">
          <img src="../../static/images/card.jpg" alt>
        </a>

        <a href="#/mine">
          <img src="../../static/images/mine.jpg" alt>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.container {
  text-align: center;
  vertical-align: center;
  a {
    margin: 10px;
  }
  img {
    margin: 20px;
  }
  img:first-child {
    width: 300px;
    height: 300px;
  }
  img:last-child {
    width: 300px;
  }
}
</style>

