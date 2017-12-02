import React from "react";

import TodoList from "TodoList";
import AddTodo from "AddTodo";
import TodoSearch from "TodoSearch";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            searchText: "",
            todos: [
                {
                    id: 1,
                    text: "Learn react"
                },
                {
                    id: 2,
                    text: "Earn a lot"
                },
                {
                    id: 3,
                    text: "Make everyone happy"
                },
                {
                    id: 4,
                    text: "Get rich"
                }
            ]
        };
    }
    handleSearch = (isChecked, searchText) => {
        debugger;
        this.setState({
            isChecked: isChecked,
            searchText: searchText.toLowerCase()
        });
        debugger;
    }
    handleAddTodo = (text) => {
        alert(text);
    }
    render() {
        const { todos } = this.state;
        return (
            <div className="large-4 medium-4 small-centered">
                <h1 className="text-center">Easy Todo</h1>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
}

export default TodoApp;