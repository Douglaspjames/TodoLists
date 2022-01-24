<template>
  <div align="center">
    <h2>New Todo List</h2>
    <div>
      <label>Name: </label><br>
      <input @input="enableTaskAdding=true" v-model="name" type="text" name="name">
    </div>
    <button v-if="enableTaskAdding" @click="addTask=true, enableTaskAdding=false">Add Task</button>
    <AddNewTask
      v-if="addTask"
      :newTodoList="true"
      @createTodoList="newTodoList"
      @cancel="cancelList"
    />
    <div>
      <button v-if="!addTask" @click="cancelList">Cancel</button>
    </div>
  </div>
</template>

<script>
import AddNewTask from '@/components/AddNewTask'

export default {
  name: 'NewTodo',
  components: {
    AddNewTask
  },
  data() {
    return {
      addTask: false,
      enableTaskAdding: false,
      name: ''
    }
  },
  methods: {
    newTodoList (newTask) {
      this.addTask = true
      const newTodoList = {
        name: this.name,
        id: Math.ceil(Math.random()*1000000),
        complete: false,
        tasks: [newTask]
      }
      this.$emit('newTodo', newTodoList)
      this.name = ''
    },
    cancelList () {
      this.$emit('cancel')
    }
  }
}

</script>

<style>
</style>