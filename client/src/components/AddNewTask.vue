<template>
  <div align="center">
    <div v-if="update">
      <h2>Update Task</h2>
    </div>
    <div v-else>
      <h2>New Task</h2>
    </div>
    <div>
      <label>Description: </label><br>
      <input v-model="description" type="text" name="description">
    </div>
    <div>
      <label>Due Date: </label>
      <Datepicker class="date" v-model="dueDate" name="dueDate"></Datepicker>
    </div>
    <div>
      <label>Priority: </label><br>
      <select v-model="priority">
          <option>low</option>
          <option>medium</option>
          <option>high</option>
      </select>
    </div>
    <button @click="newTask" :disabled="disableSave">Save</button><br>
    <button @click="cancel">Cancel</button><br>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'AddNewTask',
  components: {
    Datepicker
  },
  data() {
    return {
      description: '',
      dueDate: '',
      priority: '',
      disabled: true
    }
  },
  computed: {
    disableSave() {
      return this.description == '' || this.dueDate == '' || this.priority == '' ? true : false
    }
  },
  props: {
    tasks: {
      required: false,
      type: Object
    },
    newTodoList: {
      required: false,
      type: Boolean,
      default: false
    },
    update: {
      required: false,
      type: Boolean,
      default: false
    },
    taskId: {
      required: false,
      type: Number
    }
  },
  methods: {
    newTask () {
      if (this.update) {
        const updatedTask = {
          id: this.taskId,
          description: this.description,
          dueDate: new Date(this.dueDate).toLocaleDateString('en-US'),
          priority: this.priority,
          complete: false,
          edit: false
        }
        this.$emit('updateTask', updatedTask)
      } else {
        const newTask = {
          id: Math.ceil(Math.random()*1000000),
          description: this.description,
          dueDate: new Date(this.dueDate).toLocaleDateString('en-US'),
          priority: this.priority,
          complete: false,
          edit: false
        }
        if (this.newTodoList) {
          this.$emit('createTodoList', newTask)
        } else {
          this.$emit('newTask', newTask)
        }
      }
      this.description = ''
      this.dueDate = ''
      this.priority = ''
    },
    cancel () {
      this.$emit('cancel')
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