<template>
  <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="visible"
      @close="onClose"
    > 
      <template v-slot:handle>
        <div class="handle" @click="showDrawer">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <div>
        <h2>主题颜色</h2>
        <h2>导航模式</h2>
      </div>
    </a-drawer>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
   methods: {
    showDrawer() {
      this.visible = !this.visible;
    }
   }
}
</script>

<style lang="less" scoped>
.handle {
  position: absolute;
  top: 240px;
  right: 300px;
  width: 48px;
  height: 48px;
  background: #1890ff;
  color: #fff;
  font-size: 20px;
  text-align: center;
  line-height: 48px;
  border-radius: 3px 0 0 3px;
}
</style>
