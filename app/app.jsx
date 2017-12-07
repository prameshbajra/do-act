import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, HashRouter } from "react-router-dom";

import TodoApp from "TodoApp";
import TodoApi from "TodoApi";
import { addTodo, setSearchText, toggleShowCompleted, addTodoInBulk } from "Actions";
import { configureStore } from "ConfigureStore";

require("style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css");
require("style-loader!css-loader!sass-loader!ApplicationStyles");

const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
    TodoApi.setTodos(state.todos);
});

const initialTodos = TodoApi.getTodos();
store.dispatch(addTodoInBulk(initialTodos));

$(document).foundation();

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <Route path="/" component={TodoApp} >
            </Route>
        </Provider>
    </HashRouter>,
    document.getElementById("app")
);