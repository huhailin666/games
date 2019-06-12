<template>
  <div>
    <div class="container">
      <div class="header">
        <h1>
          <span class="boomtext rollIn animated" v-for="item in title" :key="item">{{item}}</span>
        </h1>
        <!-- 请选择你想玩的游戏 -->
      </div>
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
import $ from "jquery";
$.fn.boomText = function(type) {
  type = type || "rollIn";
  /*得到this中的内容*/
  this.html(function() {
    var arr = $(this)
      .text()
      .split("")
      .map(function(word) {
        return "<span class='boomtext'>" + word + "</span>";
      });
    return arr.join("");
  });
  var index = 0;
  var $boomTexts = $(this).find("span");
  var clock = setInterval(function() {
    $boomTexts.eq(index).addClass("animated " + type);
    index++;
    if (index >= $boomTexts.length) {
      clearInterval(clock);
    }
  }, 300);
};
export default {
  data() {
    return {
      xxx: true,
      show: ["请", "选", "择", "你", "想", "玩", "的", "游", "戏"],
      title: [' ']
    };
  },
  mounted() {
    if (this.show) {
      setInterval(() => {
        this.title.push(this.show.shift());
      }, 300);
    }
    // $('p').boomText()
  }
};
</script>
<style lang="less" scoped>
.container {
  min-width: 1000px;
  background: #eee;
  text-align: center;
  vertical-align: center;
  min-height: 100vh;
  .header{
    border-bottom: 1px solid red;
    padding: 20px 0;
    box-shadow: -3px 9px 3px -3px rgba(210, 91, 91, 0.75);
    margin-bottom: 20px;
    overflow: hidden;
    height:80px;
    h1 {
      text-align: left;
      width:300px;
      margin: 0 auto;
    .boomtext {
      display: none;
      display: inline-block;
    }
  }
  }
  
  .button {
    display: inline-block;
    font-size: 20px;
    margin: 10px;
    background: #69cc69;
    color: #fff;

    padding: 10px 20px;
    margin: 10px 60px;
    border-radius: 30px;
    width: 200px;
    box-shadow: 0px 0px 3px 5px rgba(222, 204, 204, 0.75);
    &:hover {
      background: #9add43;
    }
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

