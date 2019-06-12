<template>
  <div id="mineSweep_container">
    <div class="mineSweep_header">
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-naozhong"></use>
        </svg>
        <span class="time" style="font-szie:15px;margin:0 5px">{{time}}</span>
      </span>
      <button @click="reStart">重新开始</button>
      <span>
        <svg class="icon" style="margin:0 5px" aria-hidden="true">
          <use xlink:href="#icon-dilei1"></use>
        </svg>
        <span class="remainder_mine">{{remainder_mine}}</span>
      </span>
    </div>
    <div class="body" @click="(!start)&&toStart()">
      <div class="rows" v-for="i in count" :key="i">
        <div
          @contextmenu.prevent="(!end)&&red_flag(i-1,j-1)"
          @click="(!end)&&open(i-1,j-1)"
          class="item"
          v-for="j in count"
          :key="j"
        >
          <svg class="icon" id="red_flag" aria-hidden="true">
            <use xlink:href="#icon-hongqi"></use>
          </svg>
          <div class="itemContent" style="display:none;">
            <svg v-if="arr[i-1][j-1].isMine" class="icon" aria-hidden="true">
              <use xlink:href="#icon-dilei"></use>
            </svg>
            <span v-else>{{arr[i-1][j-1].aroundNumber===0?'':arr[i-1][j-1].aroundNumber}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import "../../lib/iconfont/iconfont.js";
// import { Toast } from "mint-ui";
export default {
  data() {
    return {
      count: 16,
      mineCount: 50,
      arr: [],
      isActive: false,
      end: false,
      time: 0,
      timer: "",
      start: false,
      remainder_mine: 50,
      open_number: 0
    };
  },
  created() {
    this.getNumber();
  },
  methods: {
    toStart() {
      this.start = true;
      console.log("计时开始");
      this.timer = setInterval(() => {
        this.time++;
      }, 1000);
    },
    red_flag(i, j) {
      console.log(i, j);
      if (this.arr[i][j].red_flag) {
        this.remainder_mine++;
      } else {
        this.remainder_mine--;
      }

      this.$set(this.arr[i][j], "red_flag", !this.arr[i][j].red_flag);
      if (this.arr[i][j].isOpen) return;
      $("#mineSweep_container .rows")
        .eq(i)
        .children()
        .eq(j)
        .toggleClass("red_flag");
    },
    reStart() {
      this.open_number = 0;
      this.getNumber();
      this.end = false;
      this.start = false;
      this.time = 0;
      this.remainder_mine = this.mineCount;
      clearInterval(this.timer);
      $("#mineSweep_container .item")
        .removeClass(["open", "red_flag"])
        .children(".itemContent")
        .css("display", "none");
    },
    getNumber() {
      this.arr = new Array(this.count);
      for (let i = 0; i < this.count; i++) {
        this.arr[i] = new Array(this.count);
        for (let j = 0; j < this.count; j++) {
          this.arr[i][j] = {
            isMine: 0,
            aroundNumber: 0,
            isOpen: false,
            red_flag: false
          };
        }
      }

      for (let i = 0; i < this.mineCount; i++) {
        let m=Math.floor(Math.random() * this.count);
        let n=Math.floor(Math.random() * this.count);
        if (this.arr[m][n].isMine ) {
          i--;
        } else {
          this.arr[m][n].isMine = 1;
        }
      }

      //判断每一个格子周围的雷的个数
      for (let i = 0; i < this.count; i++) {
        for (let j = 0; j < this.count; j++) {
          if (this.arr[i][j].isMine) continue; //如果这个格子本身是雷，直接跳过
          let minNumber = 0;
          for (let m = i - 1; m < i + 2; m++) {
            if (m < 0 || m === this.count) continue;
            for (let n = j - 1; n < j + 2; n++) {
              if (n < 0 || n === this.count) continue;
              minNumber += this.arr[m][n].isMine;
            }
          }
          this.arr[i][j].aroundNumber = minNumber;
        }
      }
      console.log(this.arr);
    },
    open(i, j) {
      if (j < 0 || j === this.count || !this.arr[i]) return;
      if (this.arr[i][j].isOpen || this.arr[i][j].red_flag) return;
      if (this.arr[i][j].isMine) {
        $("#mineSweep_container .rows .itemContent").css("display", "block");
        this.end = true;
        Toast("Game over");
        clearInterval(this.timer);
        return;
      }
      if (this.arr[i][j].red_flag) return;
      this.$set(this.arr[i][j], "isOpen", true);
      //用jquery来控制这个元素的隐藏与否
      $("#mineSweep_container .rows")
        .eq(i)
        .children()
        .eq(j)
        .addClass("open")
        .children(".itemContent")
        .css("display", "block");
      this.open_number++;
      if (this.open_number === this.count * this.count - this.mineCount) {
        Toast("恭喜通关");
        clearInterval(this.timer);
      }
      if (!this.arr[i][j].aroundNumber) {
        for (let m = i - 1; m < i + 2; m++) {
          for (let n = j - 1; n < j + 2; n++) {
            if (m === i && n === j) continue;
            this.open(m, n);
          }
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
  margin: 0;
}
#mineSweep_container {
  width:800px;
  margin: 0 auto;
  text-align: center;
  .mineSweep_header {
    width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
      width: 200px;
      font-size: 20px;
    }
    button {
      padding: 8px 20px;
      background:#fff;
      border:1px solid rgb(247, 140, 140);
      border-radius: 10px;
      &:hover{
        background:rgb(241, 190, 190);
      }
    }
  }

  .body {
    border: 2px solid rgb(170, 170, 170);
    margin: 10px auto;
    background: rgb(170, 170, 170);
    width: 600px;
    height: 600px;
    display: grid;
    grid-template-rows: repeat(16, 1fr);
    grid-row-gap: 3px;
    .rows {
      display: grid;
      grid-template-columns: repeat(16, 1fr);
      grid-column-gap: 3px;
      .item {
        border-top: 2px solid #fff;
        border-left: 2px solid #fff;
        background: rgb(196, 196, 196);
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .itemContent {
          position: absolute;
        }
        #red_flag {
          display: none;
          position: absolute;
        }
        &.open {
          background: #fff;
        }
        &.red_flag {
          #red_flag {
            display: block;
          }
        }
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  svg {
    width: 20px;
    height: 20px;
  }
}
</style>
