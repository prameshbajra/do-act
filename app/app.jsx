import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
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
store.dispatch(addTodo("I mean how the fuck is this even working?"));
store.dispatch(setSearchText("dooooomed"));
store.dispatch(toggleShowCompleted());

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