<template>
  <div align="center">
    <h1>Todo lists</h1>
    <ul>
      <li v-for="tasks in todoLists" :key="tasks.name">
        <Todo
					:tasks="tasks"
					@delete="deleteTodoList"
				/>
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
import Todo from '@/components/Todo'
import NewTodo from '@/components/NewTodo'

export default {
  name: 'Todos',
  components: {
    Todo,
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
		},
    newTodo(newTodo) {
			// check for duplicate todo list name
			let dupe = false
			this.todoLists.forEach((item) => {
				if (item.name.toLowerCase() == newTodo.name.toLowerCase()) {
					alert("Todo list name already exists");
					dupe = true
				}
			})
			if (!dupe) {
				this.todoLists = [...this.todoLists, newTodo]
			}
			this.newTodoList = false
    },
		deleteTodoList(todoId) {
      TodosService.deleteTodo(todoId)
      this.$forceUpdate()
    }
  }
}
</script>

<style>
	ul {
    list-style-type: none;
	}
</style>
