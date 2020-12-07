<template>
  <div>
    info: {{info}}
    <input :value="info.name" @input="handleChange"/>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  created() {
    this.temp = {name: ''}
    Object.keys(this.temp)
  },
  methods: {
    handleChange(e) {
      this.info.name = e.target.value
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>