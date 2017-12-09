import React from "react";
import PropType from "prop-types";
import { connect } from "react-redux";

import TodoApi from "TodoApi";
import TodoListItem from "TodoListItem";

class TodoList extends React.Component {
    static propTypes = {
        todo: PropType.array
    }
    render() {
        const { todos, showCompleted, searchText } = this.props;
        const renderTodos = () => {
            let filteredTodos = TodoApi.filteredTodos(todos, showCompleted, searchText);
            if (filteredTodos.length === 0) {
                return (
                    <p className="container-message">Are you lazy? There's nothing to do. <br />Go ahead and add some todos.</p>
                );
            }
            return filteredTodos.map((todoItem) => {
                return <TodoListItem key={todoItem.id} todoItem={todoItem} />
            });
        }
        return (
            <div className="container-footer" >
                {renderTodos()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state;
    }
)(TodoList);