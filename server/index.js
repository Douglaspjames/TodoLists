const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let todos = [{id: 1, name: 'Assignment'}];

const PORT = process.env.PORT || 3000

let todoLists = [
  {
    name: 'Groceries',
    id: 1,
    complete: false,
    todos: [
      {
        id: 10,
        description: 'apples',
        dueDate: '01/25/2022',
        priority: 'high',
        complete: true,
      },
      {
        id: 11,
        description: 'meat',
        dueDate: '01/30/2022',
        priority: 'low',
        complete: true,
      }
    ]
  },
  {
    name: 'Packing',
    id: 2,
    complete: false,
    todos: [
      {
        id: 12,
        description: 'boxes',
        dueDate: '01/25/2022',
        priority: 'high',
        complete: false,
        edit: false
      },
      {
        id: 13,
        description: 'living room',
        dueDate: '01/30/2022',
        priority: 'low',
        complete: false,
        edit: false
      },
      {
        id: 14,
        description: 'tape',
        dueDate: '02/20/2022',
        priority: 'high',
        complete: true,
        edit: false
      },
      {
        id: 15,
        description: 'truck',
        dueDate: '02/10/2022',
        priority: 'medium',
        complete: true,
        edit: false
      }
    ]
  },
  {
    name: 'Reading',
    id: 3,
    complete: false,
    todos: [
      {
        id: 16,
        description: 'Leaves of Grass',
        dueDate: '01/25/2022',
        priority: 'high',
        complete: false,
        edit: false
      },
      {
        id: 17,
        description: 'Infinite Jest',
        dueDate: '01/30/2022',
        priority: 'low',
        complete: false,
        edit: false
      },
      {
        id: 18,
        description: 'Salems Lot',
        dueDate: '02/20/2022',
        priority: 'high',
        complete: false,
        edit: false
      },
      {
        id: 19,
        description: 'The Remains of the Day',
        dueDate: '02/10/2022',
        priority: 'medium',
        complete: false,
        edit: false
      },
      {
        id: 20,
        description: 'Neuromancer',
        dueDate: '02/17/2022',
        priority: 'medium',
        complete: false,
        edit: false
      }
    ]
  }
]

app.get('/todoLists', (req, res) => {
  res.send(todoLists);
});

app.get('/todoLists/:id', (req, res) => {
  const id = Number(req.params.id);
  const todoList = todoLists.find(list => list.id === id);
  res.send(todoList);
});

app.post('/addTodoList', (req, res) => {
  const newTodo = req.body.newTodo;
  console.log("got here first", newTodo)
  todoLists.push(newTodo);
  console.log("got here", todoLists)
  res.send();
});

app.delete('/todoLists/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = todoLists.findIndex(list => list.id === id);
  todoLists.splice(index, 1);
  res.send();
});

app.get('/todos', (req, res) => {
  return res.status(200).send(todos);
});

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);