import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-router-dom";

import TodoApp from "TodoApp";

require("style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css");
require("style-loader!css-loader!sass-loader!ApplicationStyles");
$(document).foundation();

ReactDOM.render(
    <HashRouter>
        <Route path="/" component={TodoApp} >
        </Route>
    </HashRouter>,
    document.getElementById("app")
);