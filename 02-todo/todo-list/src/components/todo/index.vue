<template>
  <div class="todo-wrap">
    <el-input class="todo-input" v-model.trim="todo_text" @keyup.enter.native="handleEnter" placeholder="What needs to be done?" >
       <i slot="prefix" class="el-input__icon el-icon-arrow-down" @click.stop="handleAllChecked"></i>
    </el-input>
    <div class="todo-content">
      <item v-for="(item, index) in activeList" :key="index" :text="item.text" :checked="item.checked" @yudan="handleYudan(index, $event)" @remove="handleRemove(index)"/>
      <div class="todo—bottom">
        <div>{{ count }} items left</div>
        <div class="todu-screen">
          <div class="screenStyle">all</div>
          <div class="screenStyle" @click="handleFilterActive">Active</div>
          <div class="screenStyle">Completed</div>
        </div>
        <div class="clear">Clear completed</div>
      </div>
    </div>
  </div>
</template>

<script>
import item from './item'
export default {
  data() {
    return {
      todo_text: '',
      todo_list: [],
      isChecked: true,
      isScreen: false,
      status: '', // 当前状态
    }
  },
  components: {
    item
  },
  computed: {
    count() {
      // var result = []
      //   for(var i=0;i<this.todo_list.length;i++){
      //      result = this.todo_list[i].filter(this.todo_list[i].checked !== true)
      //       console.log(result)
      //   }
      // return result.length
      const result = this.todo_list.filter(function(item) {
        return item.checked === false
      })
      return result.length
    },
    activeList() {
      if(this.status === '') {
        return this.todo_list
      }
      if(this.status === 'active') {
        const result = this.todo_list.filter(function(item) {
          return item.checked === false
        })
        return result
      }
      return this.todo_list
    }
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
    // 全选
    handleAllChecked() {
      if(this.isChecked) {
        // 选中
        for(let i =0 ;i<this.todo_list.length;i++){
            this.todo_list[i].checked = true
           }
           this.isChecked = false
      }else {
        for(let i =0 ;i<this.todo_list.length;i++){
            this.todo_list[i].checked = false
           }
           this.isChecked = true
      }
    },
    // active状态筛选
    handleFilterActive() {
      this.status = 'active'
    },
    // TODO
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
.todo—bottom{
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
}
.todu-screen{
  display: flex;

}
.screenStyle{
  padding: 5px;
}
.screenStyle:hover{
  /* padding: 0 5px; */
  outline: 1px solid orange;
  border-radius: 5px;

  }
 .clear:hover{
  text-decoration:underline;
  }
</style>

