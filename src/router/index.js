import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Stack from '@/components/stack'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/stack',
      name: 'stack',
      component: Stack
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contactme',
      name: 'contact',
      component: Contact
    },
    // { path: '*', redirect: '/' },
  ]
})
