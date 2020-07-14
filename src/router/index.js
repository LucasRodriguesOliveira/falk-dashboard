import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        name: 'ChatHome',
        component: () => import(/* webpackChunkName: "chathome" */ '../components/ChatHome')
      },
      {
        path: '/chat/:id',
        name: 'Chat',
        component: () => import( /* webpackChunkName: "chat" */ '../components/Chat')
      },
      {
        path: '*',
        component: () => import(/* webpackChunkName: "chathome" */ '../components/ChatError')
      }
    ]
  },
  {
    path: '/configuracoes',
    name: 'Config',
    component: () => import(/* webpackChunkName: "config" */ '../views/Configuration.vue')
  },
  { // solução temporária, em caso de mais rotas primárias, adicionar rota de erro
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
