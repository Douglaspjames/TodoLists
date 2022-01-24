<template>
  <div class="item">
    <div>
      <h2>{{ todo.name }}</h2>
      <div class="date">
        <ul>
          <li v-for="task in todo.tasks" :key="task.description">
            <div>
              <p :class="{ 'complete': task.complete }">{{ task.description }} {{ task.dueDate }} Priority: {{ task.priority }}</p>
              <div v-if="!task.edit">
                <button v-if="!task.complete" @click="markTaskComplete(task)">Complete</button>
                <button v-if="!task.complete" @click="task.edit=true">Update</button>
                <button @click="deleteTask(task.id)">Delete</button>
              </div>
              <AddNewTask
                v-if="task.edit"
                :update="true"
                :taskId="task.id"
                @updateTask="updateTask"
                @cancel="cancel(task)"
              />
            </div>
          </li>
        </ul>
      </div><br>
      <button @click="addTask=true">Add Task</button>
    </div>
    <AddNewTask
      v-if="addTask"
      @newTask="addNewTask"
      @cancel="cancel"
    /><br>
    <router-link :to="'/'"><button>BACK</button></router-link>
  </div>
</template>

<script>
import TodosService from '@/services/TodosService.js';
import AddNewTask from '@/components/AddNewTask'

export default {
  name: 'Todo',
  components: {
    AddNewTask
  },
  data() {
    return {
      addTask: false,
      todo: {},
      listId: ''
    }
  },
  mounted() {
    this.listId = this.$route.params.id
    this.getTodo(this.listId)
  },
  methods: {
    async getTodo (todoId) {
      this.todo = await TodosService.getTodo(todoId)
    },
    async deleteTask (taskId) {
      await TodosService.deleteTask(taskId, this.listId)
      this.getTodo(this.listId)
    },
    async addNewTask (newTask) {
      // check for duplicate task name
      let dupe = false
			this.todo.tasks.forEach((item) => {
				if (item.description.toLowerCase() == newTask.description.toLowerCase()) {
					alert("Task name already exists");
          dupe = true
				}
			})
      if (!dupe) {
        await TodosService.addNewTask(newTask, this.listId)
        this.getTodo(this.listId)
      }
      this.addTask = false
    },
    async markTaskComplete (task) {
      task.complete = true
      this.updateTask(task)
    },
    cancel (task) {
      if (task) {
        task.edit = false
      } else {
        this.addTask = false
      }

    },
    async updateTask (updatedTask) {
      await TodosService.updateTask(updatedTask, this.listId)
      this.getTodo(this.listId)
    }
  }
}
</script>

<style scoped>
  .complete {
    text-decoration: line-through
  }
  .date {
    display: flex;
    justify-content: center;
  }
  ul {
    list-style-type: none;
	}
</style>