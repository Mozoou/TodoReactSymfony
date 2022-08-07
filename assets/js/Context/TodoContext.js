import React, { Component, createContext } from "react";

export const TodoContext = createContext();

export default class TodoContextProvider extends Component {

    constructor(props){
        super(props);
        this.state = { 
            todos:[{
                task: 'do something'
            }],
        }
    }

    // create
    createTodo() {

    }
    // read
    readTodo() {

    }
    // update
    updateTodo() {

    }
    // delete
    deleteTodo() {

    }

    render() {
        return <div>
            <TodoContext.Provider value={{
                ...this.state,
                createTodo: this.createTodo.bind(this),
                readTodo: this.readTodo.bind(this),
                updateTodo: this.updateTodo.bind(this),
                deleteTodo: this.deleteTodo.bind(this)
            }}>
                {this.props.children}
            </TodoContext.Provider>
        </div>;
    }
}
