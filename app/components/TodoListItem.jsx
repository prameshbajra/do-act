import React from "react";

class TodoListItem extends React.Component {
    render() {
        return (
            <div>
                {this.props.todoItem}
            </div>
        );
    }
}

export default TodoListItem;