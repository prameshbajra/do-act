import React from "react";
import uuidV1 from "uuid/v1";
import moment from "moment";

import AddTodo from "AddTodo";
import TodoList from "TodoList";
import TodoSearch from "TodoSearch";

class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <div className="page-actions">
                    <a href="#" className="button hollow alert">Logout</a>
                </div>
                <div className=" small-11 large-5 medium-6 small-centered">
                    <br />
                    <h2 className="text-center">Easy Todo</h2>
                    <div className="container">
                        <TodoSearch />
                        <TodoList />
                        <AddTodo />
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoApp;