import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		component: HelloWorld
    },
	{
		path: '/detail',
		component: Detail
	}
  ]
})
