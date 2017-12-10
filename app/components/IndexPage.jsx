import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import TodoApp from "TodoApp";
import LoginPage from "LoginPage";

import firebase from "Firebase";

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.history.replace("/todoApp");
            }
            else {
                this.props.history.replace("/");
            }
        });
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/todoApp" component={TodoApp} />
                    <Route path="/" component={LoginPage} />
                </Switch >
            </div>
        );
    }
}
export default IndexPage;