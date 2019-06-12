 <template>
  <div class="container">
    <div class="header">
      <h3>扫雷</h3>
      <p>
        <button :class="{'active':isActive===2?true:false}" @click="toEasy">简单</button>
        <button :class="{'active':isActive===1?true:false}" @click="toMedium">中等</button>
        <button @click="toHard" :class="{'active':isActive===0?true:false}">困难</button>
      </p>
    </div>
    <div class="main">
      <transition appear tag="div" :duration="{leave:500}"
          enter-active-class="flip animated"
          leave-active-class="close"
      >
        <easy v-if="isActive===2"/>
        <hard v-else-if="isActive===0"/>
        <medium v-else/>
      </transition>
    </div>
  </div>
</template>
<script>
import easy from "./Easy.vue";
import medium from "./Medium.vue";
import hard from "./Hard.vue";
export default {
  data() {
    return {
      isActive: 2
    };
  },
  methods: {
    toHard() {
      this.isActive = 0;
    },
    toMedium() {
      this.isActive = 1;
    },
    toEasy() {
      this.isActive = 2;
    }
  },
  components: {
    easy,
    hard,
    medium
  }
};
</script>
<style lang="less" scoped>
.container {
  background: rgb(238, 238, 238);
  text-align: center;
  padding-top: 30px;
  overflow: hidden;
  .header {
    padding-right: 30px;
    float: left;
    height: 140vh;
    border-right: 1px solid rgb(182, 41, 41);
    p {
      width: 200px;
      margin: 5px auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      button {
        color: #ca0c16;
        background: #fff;
        font-size: 20px;
        height: 50px;
        margin: 20px;
        border-radius: 5px;
        border: 1px solid #ca0c16;
        cursor: pointer;
        &.active {
          background: rgba(0,0,0,.1);
        }
        &:hover {
          background: #e6bbbb;
        }
      }
    }
  }
  .main {
    margin-top: -20px;
    .close{
      display:none;
    }
  }
}
</style>
