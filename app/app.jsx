import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, HashRouter } from "react-router-dom";

import IndexPage from "IndexPage";
import { configureStore } from "ConfigureStore";

require("style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css");
require("style-loader!css-loader!sass-loader!ApplicationStyles");

const store = configureStore();

$(document).foundation();

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Route path="/" component={IndexPage} />
        </HashRouter>
    </Provider>,
    document.getElementById("app")
);