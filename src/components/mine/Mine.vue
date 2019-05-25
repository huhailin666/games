 <template>
  <div class="container">
    <h3>扫雷</h3>
    <p>
      <mt-button
        @click="toHard"
        :class="{'active':isActive===0?true:false}"
        type="primary"
        plain
      >Hard</mt-button>
      <mt-button
        :class="{'active':isActive===1?true:false}"
        @click="toMedium"
        type="primary"
        plain
      >Medium</mt-button>
      <mt-button
        :class="{'active':isActive===2?true:false}"
        @click="toEasy"
        type="primary"
        plain
      >Easy</mt-button>
    </p>
    <transition
      appear
      tag="div"
      leave-active-class="leave"
      enter-active-class="flip animated"
      :duration="{leave:500}"
    >
      <easy v-if="isActive===2"/>
      <hard v-else-if="isActive===0"/>
      <medium v-else/>
    </transition>
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
  .leave {
    display: none;
  }
  h3 {
    margin: 0;
    padding: 0;
  }
  p {
    width: 500px;
    margin: 5px auto;
    display: flex;
    width: 500px;
    justify-content: space-around;
    button {
      width: 100%;
      color: black;
      height: 30px;
      &.active {
        background: #ccc;
      }
    }
  }
  text-align: center;
}
</style>
