<template>
  <div align="center">
    <h1>Todo lists</h1>
    <ul>
      <li v-for="todo in todoLists" :key="todo.name">
        <router-link :to="'/todo/'+ todo.id"><h1 :class="{ 'complete': todo.complete }">{{ todo.name }}</h1></router-link>
        <p>{{ todo.completedTasks }} / {{ todo.tasks.length }}</p>
        <button @click="deleteTodoList(todo.id)">Delete</button>
      </li>
    </ul>
    <NewTodo
			v-if="newTodoList"
			:todoLists="todoLists"
			@newTodo="newTodo"
			@cancel="newTodoList=false"
		/>
    <button v-if="!newTodoList" @click="newTodoList=true">Create Todo List</button>
  </div>
</template>

<script>
import TodosService from '@/services/TodosService.js';
import NewTodo from '@/components/NewTodo'

export default {
  name: 'Todos',
  components: {
		NewTodo
  },
  data() {
    return {
			newTodoList: false,
			todoLists: []
    }
  },
	mounted() {
		this.getTodos()
	},
  methods: {
		async getTodos() {
			this.todoLists = await TodosService.getTodos()
      this.todoLists.forEach((item) => {
        this.$set(item,'completedTasks', item.tasks.filter(list => list.complete == true).length)
        if (item.completedTasks == item.tasks.length) {
          item.complete = true
        }
      })
		},
    async newTodo(newTodo) {
			// check for duplicate todo list name
      let dupe = false
			this.todoLists.forEach((item) => {
				if (item.name.toLowerCase() == newTodo.name.toLowerCase()) {
					alert("Todo list name already exists");
          dupe = true
				}
			})
      if (!dupe) {
        await TodosService.addTodo(newTodo)
        this.getTodos()
      }
			this.newTodoList = false
    },
		async deleteTodoList(listId) {
      await TodosService.deleteTodoList(listId)
      this.getTodos()
    }
  }
}
</script>

<style>
	ul {
    list-style-type: none;
	}
  .complete {
    text-decoration: line-through
  }
</style>
