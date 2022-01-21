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
  async deleteTodo(todoId) {
    let res = await axios.delete("http://localhost:3000/todoLists/" + todoId);
    return res.data;
  }
}