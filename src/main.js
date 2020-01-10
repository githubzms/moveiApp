import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import {
  Button,
  Tabbar,
  TabbarItem,
  NavBar,
  Icon,
  Tab,
  Tabs,
  Card,
  Swipe,
  SwipeItem,
  Lazyload,
  Field,
  Cell,
  CellGroup,
  Tag,
  IndexBar,
  IndexAnchor,
  Search,
  Loading,
  Dialog,
  List,
  Toast,
  Uploader
} from 'vant'
import 'vant/lib/index.css'
Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.prototype.$dialog =Dialog
Vue.prototype.$toast =Toast
Vue.use(Button);
Vue.use(List);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Loading);
Vue.use(Search);
Vue.use(Uploader);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(IndexBar).use(IndexAnchor);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Cell).use(CellGroup);
Vue.use(Lazyload);
Vue.use(Tab).use(Tabs);
Vue.use(Card);
Vue.use(Field);
Vue.use(Tag);
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg)
})
=======

Vue.config.productionTip = false

>>>>>>> ad20cc9f65b4597f5d7f1f9619eddd0ebc6a67be
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
