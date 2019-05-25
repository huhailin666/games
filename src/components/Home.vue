<template>
  <div>
    <div class="container">
      <h1>请选择你想玩的游戏</h1>
      <router-link to="/card">
        <mt-button type="primary" plain>蜘蛛纸牌</mt-button>
      </router-link>
      <router-link to="/mine">
        <mt-button type="primary" plain>扫雷</mt-button>
      </router-link>
      <div class="img">
        <router-link to="/card">
          <img src="../../static/images/card.jpg" alt>
        </router-link>

        <router-link to="/mine">
          <img src="../../static/images/mine.jpg" alt>
        </router-link>
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
  button {
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

