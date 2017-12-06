import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-router-dom";

import TodoApp from "TodoApp";
import { addTodo, setSearchText, toggleShowCompleted } from "Actions";
import { configureStore } from "ConfigureStore";

require("style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css");
require("style-loader!css-loader!sass-loader!ApplicationStyles");

const store = configureStore();
store.subscribe(() => {
    console.log("New State", store.getState());
});

store.dispatch(addTodo("Getting dooooomed !!"));
store.dispatch(setSearchText("dooooomed"));
store.dispatch(toggleShowCompleted());

$(document).foundation();

ReactDOM.render(
    <HashRouter>
        <Route path="/" component={TodoApp} >
        </Route>
    </HashRouter>,
    document.getElementById("app")
);