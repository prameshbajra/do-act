import React from "react";
import uuidV1 from "uuid/v1";
import moment from "moment";

import AddTodo from "AddTodo";
import TodoList from "TodoList";
import TodoSearch from "TodoSearch";

class TodoApp extends React.Component {
    render() {
        return (
            <div className=" small-11 large-5 medium-6 small-centered">
                <br />
                <h2 className="text-center">Easy Todo</h2>
                <div className="container">
                    <TodoSearch />
                    <TodoList />
                    <AddTodo />
                </div>
            </div>
        );
    }
}

export default TodoApp;