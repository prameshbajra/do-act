import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import TodoApp from "TodoApp";
import LoginPage from "LoginPage";

import { login, logout, startAddTodos } from "Actions";

import { configureStore } from "ConfigureStore";

import firebase from "Firebase";

const store = configureStore();
class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                store.dispatch(login(user.uid));
                store.dispatch(startAddTodos());
                this.props.history.replace("/todoApp");
            }
            else {
                store.dispatch(logout());
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
export default connect()(IndexPage);