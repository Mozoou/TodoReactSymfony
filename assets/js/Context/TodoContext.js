import React, { Component, createContext } from "react";

export const TodoContext = createContext();

export default class TodoContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { 
            id:1,
            name: "do something" },
        { 
            id:2,
            name: "do something" 
        },
        { 
            id:3,
            name: "do something"
         },
        { 
            id:4,
            name: "do something"
         },
        { 
            id:5,
            name: "do something"
         },
        { 
            id:6,
            name: "do something"
         },
      ],
    };
  }

  // create
  createTodo(e, todo) {
    e.preventDefault();
    console.log(todo)
    let newTodos = [...this.state.todos];
    newTodos.push(todo);
    this.setState({
        todos:newTodos,
    })
  }
  // read
  readTodo() {}
  // update
  updateTodo(data) {
    let todos = [...this.state.todos];
    let todo = todos.find(todo => {
       return todo.id === data.id 
    })
    todo.name = data.name

    this.setState({
        todos: todos,
    })
  }
  // delete
  deleteTodo(todoToDelete) {
    let todos = [...this.state.todos];
    let todo = todos.find(todo =>{
        return todo.id === todoToDelete.id
    })

    todos.splice(todos.indexOf(todo), '1')

    this.setState({
        todos:todos,
    })
  }

  render() {
    return (
      <div>
        <TodoContext.Provider
          value={{
            ...this.state,
            createTodo: this.createTodo.bind(this),
            readTodo: this.readTodo.bind(this),
            updateTodo: this.updateTodo.bind(this),
            deleteTodo: this.deleteTodo.bind(this),
          }}
        >
          {this.props.children}
        </TodoContext.Provider>
      </div>
    );
  }
}
