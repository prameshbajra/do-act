import React from "react";
import uuidV1 from "uuid/v1";

import AddTodo from "AddTodo";
import TodoList from "TodoList";
import TodoApi from "TodoApi";
import TodoSearch from "TodoSearch";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            searchText: "",
            todos: TodoApi.getTodos()
        }
    }
    // Fires when state or props change ...
    componentDidUpdate() {
        TodoApi.setTodos(this.state.todos);
    }
    handleToggle = (id) => {
        const updatedTodos = this.state.todos.map((todoItem) => {
            if (todoItem.id === id) {
                todoItem.isCompleted = !todoItem.isCompleted;
            }
            return todoItem;
        });
        this.setState({
            todos: updatedTodos
        });
    }
    handleSearch = (isChecked, searchText) => {
        this.setState({
            isChecked: isChecked,
            searchText: searchText.toLowerCase()
        });
    }
    handleAddTodo = (text) => {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuidV1(),
                    text: text,
                    isCompleted: false
                }
            ]
        });
    }
    render() {
        const { todos } = this.state;
        return (
            <div className="large-4 medium-4 small-centered">
                <h1 className="text-center">Easy Todo</h1>
                <TodoSearch onSearch={this.handleSearch} />
                <hr />
                <TodoList todos={todos} onToggle={this.handleToggle} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
}

export default TodoApp;