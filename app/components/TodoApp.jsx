import React from "react";
import { Route, Switch } from "react-router-dom";

import TodoList from "TodoList";

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    text: "Learn react"
                },
                {
                    id: 2,
                    text: "Earn a lot"
                }
            ]
        };
    }
    render() {
        const { todos } = this.state;
        return (
            <div>
                <TodoList todos={todos} />
            </div>
        );
    }
}

export default MainComponent;