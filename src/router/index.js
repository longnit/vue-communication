import Vue from 'vue'
import Router from 'vue-router'
import firstChild from '../components/firstChild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstChild',
      component: firstChild
    }
  ]
})
