import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,Tabbar,TabbarItem,NavBar } from 'vant'
import 'vant/lib/index.css'


Vue.config.productionTip = false

Vue.use(Button);
Vue.use(NavBar);
Vue.use(Tabbar).use(TabbarItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
