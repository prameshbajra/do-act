import React from "react";
import momemt from "moment";

class TodoListItem extends React.Component {
    render() {
        const { todoItem, onToggle } = this.props;
        const renderDate = () => {
            let message = "Created at - ";
            let timeStamp = todoItem.createdAt;
            if (todoItem.isCompleted) {
                message = "Completed at - ";
                timeStamp = todoItem.completedAt;
            }
            return message + momemt.unix(timeStamp).format("MMM Do YYYY @ h:mm a");
        }

        return (
            <div onClick={() => { onToggle(todoItem.id) }}>
                <input type="checkbox" checked={todoItem.isCompleted} onChange={() => { }} />
                <p>{todoItem.text}</p>
                <p>{renderDate()}</p>
            </div>
        );
    }
}

export default TodoListItem;