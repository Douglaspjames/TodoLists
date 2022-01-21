<template>
  <div class="item">
    <div v-if="!details">
      <h2 :class="{ 'complete': tasks.complete }" @click="details=true">{{ tasks.name }}</h2>
      <p>{{ completedTasks }} / {{ allTasks }}</p>
    </div>

    <TaskList
      v-if="details"
      :tasks="tasks"
      @deleteTask="deleteTask"
    /><br>
    <button v-if="details" @click="details=false">Close</button>
    <button v-if="!details" @click="$emit('delete', tasks.id)">Delete</button>
  </div>
</template>

<script>
import TaskList from '@/components/TaskList'

export default {
  name: 'Todo',
  components: {
    TaskList
  },
  data() {
    return {
			details: false,
      allTasks: null,
      completedTasks: null
    }
  },
  props: {
    tasks: {
      required: true,
      type: Object
    },
  },
  mounted() {
    this.getCompletedTaskCount()
  },
  methods: {
    getCompletedTaskCount () {
      this.allTasks = this.tasks.todos.length
      this.completedTasks = this.tasks.todos.filter(todo => todo.complete == true).length
      if (this.allTasks == this.completedTasks) {
        this.tasks.complete = true
      }
    },
    deleteTask (taskId) {
      this.tasks.todos = this.tasks.todos.filter(task => task.id !== taskId)
    }
  }
}
</script>

<style scoped>
  .complete {
    text-decoration: line-through
  }
  .item:hover {
    cursor: pointer
  }
</style>