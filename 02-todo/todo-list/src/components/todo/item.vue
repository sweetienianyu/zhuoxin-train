<template>
  <div class="todo-item">
    <el-checkbox class="toggle" v-model="computedChecked"></el-checkbox>
    <!-- <span :class="{ 'text1' :checked}">{{text}}</span> -->
    <span :style="{'color': checked ? 'red' : ''}">{{text}}</span>
    <i class="icon el-icon-close" @click="remove()"></i>
  </div>
</template>

<script>
export default{
  props: {
    text: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
    }
  },
  data() {
    return {
      // sss: false
    }
  },
  // 父组件传递的props 子组件不能直接修改 
  // 可以通过定义一个额外的变量sss 然后在watch中监听props checked
  // 然后把checked的值赋给sss 然后在checkbox中v-model 绑定的是这个sss
  // watch: {
  //   checked(val) {
  //     this.sss = val
  //   }
  // }
  computed: {
    computedChecked: {
      get() {
        return this.checked
      },
      set(val) {
        this.$emit('yudan', val)
      }
    }
  },
  methods: {
    remove() {
        this.$emit('remove')
    }
  }
}
</script>

<style >
.todo-item {
  display: flex;
  align-items: center;
  width: 100%;
  height: 58px;
  border-bottom: 1px solid #eaeaea;
}
.text {
  flex: 1;
  text-align: left;
}
.text1{
  color: aqua;
}
.toggle {
  width: 30px;
}
.icon {
  width: 30px
}
</style>



