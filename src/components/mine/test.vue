<template>
  <div id="mineSweep_container">
    <div class="mineSweep_header">
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-naozhong"></use>
        </svg>
        <span class="time" style="font-szie:15px;margin:0 5px">{{time}}</span>
      </span>
      <mt-button type="primary" plain>重新开始</mt-button>
      <span>
        <svg class="icon" style="margin:0 5px" aria-hidden="true">
          <use xlink:href="#icon-dilei1"></use>
        </svg>
        <span class="remainder_mine">{{remainder_mine}}</span>
      </span>
    </div>

    <div class="body" @click="(!start)&&toStart()">
      <div class="rows" v-for="(item,i) in arr" :key="i">
        <div
          @contextmenu.prevent="(!end)&&red_flag(i,j)"
          @click="(!end)&&open(i,j)"
          class="item"
          :class="{open:jtem.isOpen,red_flag:jtem.red_flag}"
          v-for="(jtem,j) in item"
          :key="j"
        >
          <svg class="icon" id="red_flag" aria-hidden="true">
            <use xlink:href="#icon-hongqi"></use>
          </svg>
          <div class="itemContent">
            <svg v-if="jtem.isMine" class="icon" aria-hidden="true">
              <use xlink:href="#icon-dilei"></use>
            </svg>
            <span v-else>{{jtem.aroundNumber===0?'':jtem.aroundNumber}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import "../../lib/iconfont/iconfont.js";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      count: 10,
      mineCount: 20,
      arr: [[], [], [], [], [], [], [], [], [], []],
      isActive: false,
      end: false,
      time: 0,
      timer: "",
      start: false,
      remainder_mine: 20,
      open_number: 0
    };
  },
  created() {
    this.getNumber();
    console.log(this.arr);
  },
  methods: {
    red_flag(i, j) {
      console.log(i, j);
      if (this.arr[i][j].red_flag) {
        this.remainder_mine++;
      } else {
        this.remainder_mine--;
      }
      this.$set(this.arr[i][j], "red_flag", !this.arr[i][j].red_flag);
      if (this.arr[i][j].isOpen) return;
    },
    open(i, j) {
      if (j < 0 || j === this.count || !this.arr[i]) return;
      if (this.arr[i][j].isOpen || this.arr[i][j].red_flag) return;
      if (this.arr[i][j].isMine) {
        for (let i = 0; i < this.count; i++) {
          for (let j = 0; j < this.count; j++) {
            this.$set(this.arr[i][j], "isOpen", true);
            console.log(this.arr)
          }
        }
        // this.end = true;
        Toast("Game over");
        clearInterval(this.timer);
        return;
      }
      if (this.arr[i][j].red_flag) return;
      this.$set(this.arr[i][j], "isOpen", true);
      if (!this.arr[i][j].aroundNumber) {
        for (let m = i - 1; m < i + 2; m++) {
          for (let n = j - 1; n < j + 2; n++) {
            if (m === i && n === j) continue;
            this.open(m, n);
          }
        }
      }
    },

    toStart() {
      this.start = true;
      console.log("计时开始");
      this.timer = setInterval(() => {
        this.time++;
      }, 1000);
    },
    getNumber() {
      for (let i = 0; i < this.count; i++) {
        for (let j = 0; j < this.count; j++) {
          this.arr[i][j] = {
            isMine: 0,
            aroundNumber: 0,
            isOpen: false,
            red_flag: false
          };
        }
      }
      var cycleNumber = 0;
      for (let i = 0; i < this.mineCount; i++) {
        if (
          this.arr[Math.floor(Math.random() * this.count)][
            Math.floor(Math.random() * this.count)
          ].isMine
        ) {
          i--;
        } else {
          this.arr[Math.floor(Math.random() * this.count)][
            Math.floor(Math.random() * this.count)
          ].isMine = 1;
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
      height: 25px;
    }
  }

  .body {
    margin: 10px auto;
    background: #ccc;
    width: 500px;
    height: 500px;
    display: grid;
    grid-template-rows: repeat(10, 10%);
    .rows {
      display: grid;
      grid-template-columns: repeat(10, 10%);
      .item {
        border: 1px solid blue;
        background: rgb(196, 196, 196);
        display: flex;
        justify-content: center;
        align-items: center;
        #red_flag {
          display: none;
        }
        .itemContent {
          display: none;
        }
        &.red_flag {
          #red_flag {
            display: block;
          }
        }
        &.open {
          background: #fff;
          .itemContent {
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
