import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import TextBook from '@/components/TextBook'
import Discovery from '@/components/Discovery'
import Mine from '@/components/Mine'
import TextBookDetail from '@/components/TextBookDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/textbook',
      name: 'TextBook',
      component: TextBook
    },
    {
      path: '/discovery',
      name: 'Discovery',
      component: Discovery
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/textdetail',
      name: 'TextBookDetail',
      component: TextBookDetail
    }
  ]
})
