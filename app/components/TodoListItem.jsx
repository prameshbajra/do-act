import React from "react";

class TodoListItem extends React.Component {
    render() {
        const { todoItem, onToggle } = this.props;
        return (
            <div onClick={() => { onToggle(todoItem.id) }}>
                <input type="checkbox" checked={todoItem.isCompleted} onChange={() => { }} />
                {todoItem.text}
            </div>
        );
    }
}

export default TodoListItem;