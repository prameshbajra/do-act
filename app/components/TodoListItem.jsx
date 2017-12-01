import React from "react";

class TodoListItem extends React.Component {
    render() {
        const { todoItem } = this.props;
        return (
            <div>
                {todoItem.id}. {todoItem.text}
            </div>
        );
    }
}

export default TodoListItem;