import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, HashRouter, Redirect } from "react-router-dom";

import IndexPage from "IndexPage";
import TodoApi from "TodoApi";
import {
    addTodo,
    startAddTodos
} from "Actions";
import { configureStore } from "ConfigureStore";

require("style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css");
require("style-loader!css-loader!sass-loader!ApplicationStyles");

const store = configureStore();

store.dispatch(startAddTodos());

$(document).foundation();

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Route path="/" component={IndexPage} />
        </HashRouter>
    </Provider>,
    document.getElementById("app")
);