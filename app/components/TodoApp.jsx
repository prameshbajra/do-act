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
            todos: [
                {
                    id: uuidV1(),
                    text: "Learn react"
                },
                {
                    id: uuidV1(),
                    text: "Earn a lot"
                },
                {
                    id: uuidV1(),
                    text: "Make everyone happy"
                },
                {
                    id: uuidV1(),
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
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuidV1(),
                    text: text
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
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
}

export default TodoApp;