<template>
  <div id="card_container">
    <div class="body flip animated">
      <!-- <transition-group enter-active-class="flip animated"  appear tag="div"> -->
      <div class="column" v-for="(item,i) in obj" :key="i">
        <transition-group
          appear
          tag="div"
          leave-active-class="bounceOut animated"
          :duration="{leave:200}"
        >
          <div
            draggable="true"
            @dragstart="mousedown($event,i,j)"
            @dragover="mousemove($event,i,j)"
            @dragend="mouseup($event)"
            class="item"
            v-for="(jtem,j) in item"
            :key="j"
          >
            <div class="content">
              <img v-if="!jtem.isOpen" :src="imgs[52].src" alt>
              <img v-else :src="imgs[(jtem.index)-1].src">
            </div>
          </div>
        </transition-group>
        <!-- <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"> -->
        <!-- <div v-show="fapai" class="box">
          <img :src="imgs[52].src" alt>
        </div>-->
        <!-- </transition> -->
      </div>
      <!-- </transition-group> -->
    </div>
    <div class="control">
      <img v-show="fapaiFlag" ref="start" :src="imgs[52].src" @click="deal" alt>
      <p>
        <mt-button @click="reStart" type="primary" plain>重新开始</mt-button>
        <mt-button @click="toOnly" type="primary" plain>简单</mt-button>
        <mt-button @click="toDouble" type="primary" plain>中等</mt-button>
        <mt-button @click="toFour" type="primary" plain>困难</mt-button>
      </p>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import imgs from "../../../static/img.json";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      imgs: imgs.images,
      count: 10,
      obj: [[], [], [], [], [], [], [], [], [], []],
      x: 0,
      y: 0,
      dragging: false,
      i: -1,
      j: -1,
      width: 0,
      arr: [],
      n: -1,
      get: 0,
      fapai: false,
      diffculty: 0,
      fapaiCount: 0,
      fapaiFlag: true
    };
  },
  created() {
    this.getNumber(0);
  },
  mounted() {
    this.width = $(".column").css("width");
  },
  methods: {
    toOnly() {
      this.getNumber(0);
      this.obj[0].push();
    },
    toDouble() {
      this.getNumber(1);

      this.obj[0].push();
    },
    toFour() {
      this.getNumber(2);
      this.obj[0].push();
    },
    reStart() {
      console.log("重新开始");
      this.getNumber(this.diffculty);
      this.obj[0].push();
    },
    //控制发牌动画
    beforeEnter(el) {
      el.style.transform = "translate(10px,20px)";
    },
    enter(el, done) {
      el.offsetWidth;
      el.style.transform = `translate(0px,0px)`;
      el.style.transition = "all .2s cubic-bezier(.67,-0.43,.77,.68)";
      done();
    },
    afterEnter(el) {
      this.fapai = false;
    },
    judge(i) {
      //判断是否能消掉
      let length = this.obj[i].length;
      if (this.obj[i][length - 1].number != 1) {
        return;
      }
      let color = this.obj[i][length - 1].color;
      for (let m = length - 1, n = 1; m > -1; m--, n++) {
        if (this.obj[i][m].number != n || this.obj[i][m].color != color) return;
        if (n === 13) {
          this.obj[i].splice(m);
          // this.$set(this.obj[i][this.obj[i].length - 1], "isOpen", true);
          this.obj[i].push();
          this.get++;
          console.log('消掉',this.get,'次')
          if (this.get === 8) {
            Toast("恭喜通关");
          }
        }
      }
    },

    deal() {
      //发牌
      this.fapai = true;
      this.fapaiCount++;
      for (let i = 0; i < 10; i++) {
        let index = this.arr[++this.n].index;
        let number = this.arr[this.n].number;
        let color = this.arr[this.n].color;
        this.obj[i].push({ isOpen: true, index, number, color });
        this.judge(i);
      }
      if (this.fapaiCount == 5) {
        this.fapaiFlag = false;
      }
    },
    mousedown(el, i, j) {
      console.log(i, j);
      if (!this.obj[i][j].isOpen) {
        console.log("移动的元素没有打开");
        return;
      }
      for (let m = j; m < this.obj[i].length - 1; m++) {
        if (m === this.obj[i].length - 1) break;
        if (this.obj[i][m].number != this.obj[i][m + 1].number + 1) {
          console.log("移动的元素不合法");
          return;
        }
      }
      this.i = i;
      this.j = j;
      this.dragging = true;
      this.x = el.pageX;
      this.y = el.pageY;
    },
    mouseup(el) {
      if (!this.dragging) return;
      let x = el.pageX;
      //判断移动到了 index
      let index = Math.floor(
        (x - $("#card_container .body").offset().left) / parseInt(this.width)
      );
      this.dragging = false;
      //apply方法
      if (index!=this.i&&
        (!this.obj[index].length ||
        this.obj[index][this.obj[index].length - 1].number ==
          this.obj[this.i][this.j].number + 1)
      ) {
        if (this.j) {
          this.$set(this.obj[this.i][this.j - 1], "isOpen", true);
        }
        this.obj[index].push.apply(
          this.obj[index],
          this.obj[this.i].splice(this.j)
        );
        this.judge(index);
      } else {
        // console.log("目标元素不合法");
        $("#card_container .column")
          .eq(this.i)
          .children()
          .eq(this.j - 1)
          .nextAll()
          .children()
          .css({ transform: "translate(0px,0px)" });
      }
    },
    mousemove(el) {
      if (!this.dragging) return;
      let deltX = el.pageX - this.x;
      let deltY = el.pageY - this.y;
      $("#card_container .column")
        .eq(this.i)
        .children()
        .eq(this.j - 1)
        .nextAll()
        .children()
        .css({ transform: `translate(${deltX}px,${deltY}px)` });
    },
    getNumber(xxx) {
      //定义一个数组
      this.diffculty = xxx;
      this.fapaiCount = 0;
      this.fapaiFlag = true;
      for (let i = 0; i < 10; i++) {
        this.obj[i].splice(0);
      }
      this.arr.splice(0);
      this.n = -1;
      this.get = 0;
      if (xxx === 0) {
        for (let k = 1; k < 105; k++) {
          this.arr.push({
            color: 0,
            number: k % 13 ? k % 13 : 13,
            index: k % 13 ? k % 13 : 13
          });
        }
      } else if (xxx === 1) {
        for (let k = 1; k < 105; k++) {
          this.arr.push({
            color: parseInt(k / 53),
            number: k % 13 ? k % 13 : 13,
            index: k % 26 ? k % 26 : 26
          });
        }
      } else {
        for (let k = 1; k < 105; k++) {
          this.arr.push({
            color: parseInt(k / 27),
            number: k % 13 ? k % 13 : 13,
            index: k % 52 ? k % 52 : 52
          });
        }
      }
      //洗牌算法
      for (let k = 0; k < 104; k++) {
        let index = Math.floor(Math.random() * 104);
        let change = this.arr[index];
        this.arr[index] = this.arr[k];
        this.arr[k] = change;
      }

      for (let i = 0; i < 10; i++) {
        if (i < 4) {
          for (let j = 0; j < 5; j++) {
            let index = this.arr[++this.n].index;
            let number = this.arr[this.n].number;
            let color = this.arr[this.n].color;
            this.obj[i][j] = { isOpen: false, index, number, color };
          }
          let index = this.arr[++this.n].index;
          let number = this.arr[this.n].number;
          let color = this.arr[this.n].color;
          this.obj[i][5] = { isOpen: true, index, number, color };
        } else {
          for (let j = 0; j < 4; j++) {
            let index = this.arr[++this.n].index;
            let number = this.arr[this.n].number;
            let color = this.arr[this.n].color;
            this.obj[i][j] = { isOpen: false, index, number, color };
          }
          let index = this.arr[++this.n].index;
          let number = this.arr[this.n].number;
          let color = this.arr[this.n].color;
          this.obj[i][4] = { isOpen: true, index, number, color };
        }
      }
    }
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.v-enter {
  opacity: 0;
  transform: translateY(50px);
}

.v-enter-active {
  transition: all 0.5s ease;
}
#card_container {
  background: green;
  height: 200vh;
  width: 1200px;
  .body {
    margin: 0 auto;
    transition: all 3s linear;
    display: grid;
    width: 1100px;
    grid-template-columns: repeat(10, 10%);
    .column {
      .box {
        width: 100%;
        height: 40px;
        position: relative;
        img {
          width: 100px;
          position: absolute;
        }
      }
      .item {
        width: 100%;
        height: 40px;
        position: relative;
        .content {
          height: 100%;
          position: absolute;
          border: 1px solid red;
          left: 0;
          top: 0;
          img {
            width: 100px;
          }
        }
      }
    }
  }
  .control {
    position: fixed;
    bottom: 0;
    text-align: center;
    display: flex;
    align-items: flex-end;
    img {
      position: absolute;
      margin: 0 100px;
      width: 80px;
      height: 120px;
    }
    p {
      margin-left: 400px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      button {
        color: #ddd;
        margin: 10px;
        padding: 8px;
        vertical-align: center;
      }
    }
  }
}
</style>