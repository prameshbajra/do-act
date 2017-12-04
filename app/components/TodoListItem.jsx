import React from "react";
import momemt from "moment";

class TodoListItem extends React.Component {
    render() {
        const { todoItem, onToggle } = this.props;
        const todoClassName = todoItem.isCompleted ? "todo todo-completed" : "todo";
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
            <div className={todoClassName} onClick={() => { onToggle(todoItem.id) }}>
                <div>
                    <input type="checkbox" checked={todoItem.isCompleted} onChange={() => { }} />
                </div>
                <div>
                    <p>{todoItem.text}</p>
                    <p className="todo-subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
}

export default TodoListItem;