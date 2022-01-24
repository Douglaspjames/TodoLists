import axios from "axios"

export default {
  async getTodos() {
    let res = await axios.get("http://localhost:3000/todoLists");
    return res.data;
  },

  async getTodo(todoId) {
    let res = await axios.get("http://localhost:3000/todoLists/" + todoId);
    return res.data;
  },

  async addTodo(newTodo) {
    let res = await axios.post("http://localhost:3000/addTodoList", {
      newTodo
    });
    return res.data;
  },

  async addNewTask(newTask, listId) {
    let res = await axios.post("http://localhost:3000/addNewTask", {
      newTask,
      listId
    });
    return res.data;
  },

  async updateTask(updatedTask, listId) {
    let res = await axios.put("http://localhost:3000/updateTask", {
      updatedTask,
      listId
    });
    return res.data;
  },

  async deleteTodoList(listId) {
    let res = await axios.delete("http://localhost:3000/todoLists/" + listId);
    return res.data;
  },

  async deleteTask(taskId, listId) {
    let res = await axios.delete("http://localhost:3000/todoLists/" + listId + "/" + taskId);
    return res.data;
  }
}