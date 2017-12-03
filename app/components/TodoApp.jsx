import React from "react";
import uuidV1 from "uuid/v1";

import TodoList from "TodoList";
import AddTodo from "AddTodo";
import TodoSearch from "TodoSearch";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            searchText: "",
            todos: [{
                id: uuidV1(),
                text: "Learn react",
                isCompleted: false
            }, {
                id: uuidV1(),
                text: "Earn a lot",
                isCompleted: true
            }, {
                id: uuidV1(),
                text: "Make everyone happy",
                isCompleted: true
            }, {
                id: uuidV1(),
                text: "Get rich",
                isCompleted: false
            }]
        };
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
                <TodoList todos={todos} onToggle={this.handleToggle} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
}

export default TodoApp;