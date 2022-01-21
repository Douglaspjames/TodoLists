
<template>
  <div id="app" align="center">
    <main>
      <router-view></router-view>
    </main>
    <!-- <Todos :todos="todos"/>
    <NewTodo
      @new-todo="newTodo"
    /> -->
    <!-- <router-link :to="{ path: '/shop/customer/login' }"><button>Add New Todo</button></router-link> -->

  </div>
</template>

<script>
// import Todos from './components/Todos';
// import NewTodo from './components/NewTodo';

export default {
  name: 'App'
  // components: {
  //   Todos,
  //   NewTodo
  // },
  // data() {
  //   return {
  //     newTodoModal: false,
  //     todos: [
  //       {
  //         id: 1,
  //         title: 'Go workout',
  //         complete: false,
  //         dueDate: '01/25/2021'
  //       },
  //       {
  //         id: 2,
  //         title: 'Do laundry',
  //         complete: false,
  //         dueDate: '01/30/2021'
  //       },
  //       {
  //         id: 3,
  //         title: 'Cook food',
  //         complete: false,
  //         dueDate: '02/20/2021'
  //       },
  //       {
  //         id: 4,
  //         title: 'Clean up room',
  //         complete: false,
  //         dueDate: '02/10/2021'
  //       },
  //       {
  //         i: 5,
  //         title: 'Finish work',
  //         complete: false,
  //         dueDate: '02/17/2021'
  //       }
  //     ],
  //   }
  // },
  // methods: {
  //   newTodo(newTodo) {
  //     this.todos = [...this.todos, newTodo];
  //   }
  // }
}
</script>

<style>
</style>
