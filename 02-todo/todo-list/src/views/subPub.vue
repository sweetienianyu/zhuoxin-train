<template>
  <div>
    <h1>proxy</h1>
    <div>{{info}}</div>
    <proxy :info="info"/>
  </div>
</template>

<script>
import proxy from '../components/proxy.vue'
export default {
  data() {
    return {
      info: {}
    }
  },
  components: {
    proxy
  },
  methods: {
    handleProxyChange(val) {
      window.isUpdatingChildComponent = true
      this.info.name = val
      this.info = {name: val}
    }
  },
  created() {
  },
}
</script>

<style lang="scss" scoped>

</style>