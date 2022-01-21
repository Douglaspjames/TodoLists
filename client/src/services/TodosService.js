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
    console.log("newTodo", newTodo)
    let res = await axios.post("http://localhost:3000/addTodoList", {
      newTodo
    });
    return res.data;
  },

  async deleteTodo(todoId) {
    let res = await axios.delete("http://localhost:3000/todoLists/" + todoId);
    return res.data;
  }
}