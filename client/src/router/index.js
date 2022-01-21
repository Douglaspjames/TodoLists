import Vue from 'vue'
import Router from 'vue-router'
import Todos from '@/components/Todos'
import Todo from '@/components/Todo.vue';
import NewTodo from '@/components/NewTodo.vue';
import TaskList from '@/components/TaskList.vue';


Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/newTodo',
      name: 'NewTodo',
      component: NewTodo
    },
    {
      path: '/taskList',
      name: 'TaskList',
      component: TaskList
    }
  ]
})
export default router