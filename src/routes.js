import Vue from 'vue'
import VueRouter from 'vue-router'

import Postform from './components/authentication/Postform.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
         {
         	path: "/postform",
         	component: Postform
         },

         {
         	path: '/aaa',
         	component: Postform
         }

	]
})

export default router
