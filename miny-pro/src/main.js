import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false


import { Button, Layout, Icon, Menu, Drawer, Radio } from 'ant-design-vue'
Vue.use(Button)
Vue.use(Layout)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(Drawer)
Vue.use(Radio)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
