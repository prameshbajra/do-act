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
            return todos.map((todoItem) => {
                return <TodoListItem key={todoItem.id} todoItem={todoItem} onToggle={onToggle} />
            });
        }
        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
}

export default TodoList;