import React from "react";
import { connect } from "react-redux";

import { startLogout } from "Actions";

import AddTodo from "AddTodo";
import TodoList from "TodoList";
import TodoSearch from "TodoSearch";

class TodoApp extends React.Component {
    onLogOut = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(startLogout());
    }
    render() {
        return (
            <div>
                <div className="page-actions">
                    <a href="#" onClick={this.onLogOut} className="button hollow alert">Logout</a>
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

export default connect()(TodoApp);