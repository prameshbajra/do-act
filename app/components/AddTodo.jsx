import React from "react";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
    }
    addTodoHandler = (e) => {
        e.preventDefault();
        const todoItem = this.refs.todoItem.value;
        if (todoItem.length > 5) {
            this.refs.todoItem.value = "";
            this.props.onAddTodo(todoItem);
        } else {
            this.refs.todoItem.focus();
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addTodoHandler}>
                    <input type="text" ref="todoItem" placeholder="What do you need to do ?" />
                    <button className="hollow button expanded">Add Item</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;