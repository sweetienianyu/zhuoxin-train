<template>
  <div class="hello">
    <a-button type="primary">
      Primary
    </a-button>
  </div>
</template>

<script>
// 布局
// router
// user: {
//   user/login
//   user/register
// }

// views
// User: Login Register

// layouts  UserLayout BasicLayout=> Footer Header SideMenu 
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

