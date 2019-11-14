import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () =>
      import ('@/views/login'),
      // import HelloWorld from ''
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
      import ('@/views/about'),
      // import HelloWorld from ''
    },
    {
      path: '/detail',
      name: 'detail',
      component: () =>
      import ('@/views/detail'),
      // import HelloWorld from ''
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
      import ('@/views/login'),
      // import HelloWorld from ''
    }
  ]
})


// exports router;