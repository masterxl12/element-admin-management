import Vue from 'vue'
import Router from 'vue-router'
import CreatArticle from './views/CreatArticle.vue'
import ListArticle from './views/ListArticle.vue'
import EditArticle from './views/EditArticle.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/articles/index'
    },
    {
      path:"/articles/index",
      name:"article-list",
      component:ListArticle
    },
    {
      path: '/articles/create',
      name: 'articles-create',
      component: CreatArticle
    },
    {
      path: '/articles/:id/edit', // :id表示动态参数
      name: 'articles-edit',
      component: EditArticle
    }
  ]
})
