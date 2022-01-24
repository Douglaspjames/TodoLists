import Vue from 'vue'
import Router from 'vue-router'
import Todos from '@/components/Todos'
import Todo from '@/components/Todo.vue';


Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/todo/:id',
      name: 'Todo',
      component: Todo
    }
  ]
})
export default router