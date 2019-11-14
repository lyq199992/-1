// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';
// Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, // 使用
  router,
  components: { App },
  template: '<App/>'
})
// const router = new VueRouter({  });
router.beforeEach((to, from, next) => {
  console.log(to, from)
  var logged_in = false
  if(!logged_in && to.path == '/about'){
    next('/login');
  }else {
    next();
  }
  
  
  // to and from are both route objects. must call `next`.
})