<template>
  <div class="todo-wrap">
    <el-input class="todo-input" v-model.trim="todo_text" @keyup.enter.native="handleEnter" placeholder="What needs to be done?" ></el-input>
    <div class="todo-content">
      <item v-for="(item, index) in todo_list" :key="index" :text="item.text" :checked="item.checked" @yudan="handleYudan(index, $event)" @remove="handleRemove(index)"/>
    </div>
  </div>
</template>

<script>
import item from './item'
export default {
  data() {
    return {
      todo_text: '',
      todo_list: []
    }
  },
  components: {
    item
  },
  methods: {
    handleEnter() {
      if(!this.todo_text){
          return
      }
      // 方法1 直接把input输入的文字放进数组
      // 子组件item的按钮状态自己控制
      // this.todo_list.push(this.todo_text)

      // 方法2 通过父组件给子组件按钮传递状态
      this.todo_list.push({
        text: this.todo_text,
        checked: false
      })
      this.todo_text = ''
    },
    handleYudan(index, val) {
      this.todo_list[index].checked = val
    },
    handleRemove(index){
      this.todo_list.splice(this.todo_list[index],1)
    },
    // TODO
    // 1 全选 反选
    // 2 不同状态的筛选
    // 3 编辑
    // 4 持久化
  }
}
</script>

<style>
.todo-wrap {
  width: 500px;
  margin: 0 auto;
}
.todo-input .el-input__inner {
  width: 100%;
  border-radius: 0;
  border-bottom: none;
  
}
.todo-content {
  border: 1px solid #eaeaea;
  
}
</style>

