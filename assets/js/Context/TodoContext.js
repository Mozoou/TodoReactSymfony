import axios from "axios";
import React, { Component, createContext } from "react";

export const TodoContext = createContext();

export default class TodoContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      message: {},
    };

    this.readTodo();
  }

  // create
  createTodo(e, todo) {
    e.preventDefault();
    axios
      .post("/api/todo/create", todo)
      .then((response) => {
        if (response.data.message.level === "success") {
          this.readTodo();
        }
        this.setState({
          message: response.data.message,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // read
  readTodo() {
    axios
      .get("/api/todo/read")
      .then((response) => {
        this.setState({
          todos: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // update
  updateTodo(data) {
    axios
      .post("/api/todo/update/" + data.id, data)
      .then(() => {
        this.readTodo();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  // delete
  deleteTodo(todoToDelete) {
    axios
      .post("/api/todo/delete/" + todoToDelete.id, todoToDelete)
      .then(() => {
        this.readTodo();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  isDone(todoId, todoIsDone) {
    axios
      .post("/api/todo/done/" + todoId, {isDone:todoIsDone})
      .then((response) => {
        this.readTodo();
      })
      .catch((error) => {
        console.error(error);
      });
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
            isDone: this.isDone.bind(this),
            setMessage: (message) => {
              this.setState({ message: message });
            },
          }}
        >
          {this.props.children}
        </TodoContext.Provider>
      </div>
    );
  }
}
