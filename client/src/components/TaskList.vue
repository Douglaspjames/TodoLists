<template>
  <div align="center">
    <div>
      <h2>{{ tasks.name }}</h2>
      <div class="date">
        <ul>
          <li v-for="task in tasks.todos" :key="task.description">
            <div>
              <p :class="{ 'complete': task.complete }">{{ task.description }} {{ task.dueDate }} Priority: {{ task.priority }}</p>
              <div v-if="!task.edit">
                <button v-if="!task.complete" @click="markTaskComplete(task)">Complete</button>
                <button v-if="!task.complete" @click="task.edit=true">Update</button>
                <button @click="$emit('deleteTask', task.id)">Delete</button>
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
    />
  </div>
</template>

<script>
import AddNewTask from '@/components/AddNewTask'

export default {
  name: 'TaskList',
  components: {
    AddNewTask
  },
  data() {
    return {
      addTask: false
    }
  },
  props: {
    tasks: {
      required: true,
      type: Object
    }
  },
  methods: {
    addNewTask (newTask) {
      // check for duplicate task name
			let dupe = false
			this.tasks.todos.forEach((item) => {
				if (item.description.toLowerCase() == newTask.description.toLowerCase()) {
					alert("Task name already exists");
					dupe = true
				}
			})
			if (!dupe) {
				this.tasks.todos = [...this.tasks.todos, newTask]
			}
      this.addTask = false
    },
    markTaskComplete (task) {
      task.complete = true
    },
    cancel (task) {
      task.edit = false
    },
    updateTask (updatedTask) {
      this.tasks.todos = this.tasks.todos.filter(todo => todo.id !== updatedTask.id)
      this.tasks.todos.push(updatedTask)
    }
  }
}

</script>

<style>
  .date {
    display: flex;
    justify-content: center;
  }
  ul {
    list-style-type: none;
	}
  .complete {
    text-decoration: line-through
  }
</style>