<template>
  <div>
    <h4>函数式组件</h4>
    <TempVar>
      :var1="name"
      :var2="msg"
      <template v-slot="{var1, var2}">
        <div>
          {{var1}}
          {{var2}}
        </div>
      </template>
    </TempVar>
    <v-nodes :vnodes="getAnchoreHeading(4)"/>
  </div>
</template>

<script>
import TempVar from '../components/todo/Tempvar'
export default{
  components: {
    TempVar,
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes
    }
  },
  data() {
    return {
      name: 'hello',
      msg: 'world'
    }
  },
  methods: {
    getAnchoreHeading(level) {
      const Tag = `h${level}`
      return <Tag>hello world!</Tag>;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>