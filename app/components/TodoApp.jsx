import React from "react";
import uuidV1 from "uuid/v1";
import moment from "moment";

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
                    isCompleted: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        });
    }
    /*
    Note :  isChecked is for show completed items in TodoSearch part
            and isCompleted is for each todo item present in the list in TodoList part ...
    */
    render() {
        const { todos, isChecked, searchText } = this.state;
        const filteredTodos = TodoApi.filteredTodos(todos, isChecked, searchText);
        return (
            <div className=" small-11 large-5 medium-6 small-centered">
                <br />
                <h2 className="text-center">Easy Todo</h2>
                <div className="container">
                    <TodoSearch onSearch={this.handleSearch} />
                    <TodoList />
                    <AddTodo onAddTodo={this.handleAddTodo} />
                </div>
            </div>
        );
    }
}

export default TodoApp;