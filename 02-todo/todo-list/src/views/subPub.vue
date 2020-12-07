<template>
  <div>
    <div>{{info}}</div>
    <proxy :info="info"/>
  </div>
</template>

<script>
import proxy from '../components/proxy'
export default {
  data() {
    return {
      info: {}
    }
  },
  components: {
    proxy
  },
  created() {
  },
}
</script>

<style lang="scss" scoped>

</style>