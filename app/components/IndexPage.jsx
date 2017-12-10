import React from "react";
import { Route, Switch } from "react-router-dom";

import TodoApp from "TodoApp";
import LoginPage from "LoginPage";

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/todoApp" component={TodoApp} />
                    <Route exact path="/" component={LoginPage} />
                </Switch>
            </div>
        )
    }
}

export default IndexPage;