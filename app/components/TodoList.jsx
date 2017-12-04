import React from "react";
import PropType from "prop-types";

import TodoListItem from "TodoListItem";

class TodoList extends React.Component {
    static propTypes = {
        todo: PropType.array
    }
    render() {
        const { todos, onToggle } = this.props;
        const renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container-message">Are you lazy? There's nothing to do. <br />Go ahead and add some todos.</p>
                );
            }
            return todos.map((todoItem) => {
                return <TodoListItem key={todoItem.id} todoItem={todoItem} onToggle={onToggle} />
            });
        }
        return (
            <div className="container-footer">
                {renderTodos()}
            </div>
        );
    }
}

export default TodoList;