import firebase, { firebaseRef } from "Firebase";
import moment from "moment";

const setSearchText = (searchText) => {
    return {
        type: "SET_SEARCH_TEXT",
        searchText
    };
}
const addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        todo
    };
}
const toggleShowCompleted = () => {
    return {
        type: "TOGGLE_SHOW_COMPLETED"
    }
}
const addTodoInBulk = (todos) => {
    return {
        type: "ADD_TODOS_IN_BULK",
        todos
    }
}
const updateTodo = (id, updates) => {
    return {
        type: "UPDATE_TODO",
        id,
        updates
    }
}
const startAddTodo = (text) => {
    return (dispatch, getState) => {
        const todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };
        const todoRef = firebaseRef.child("todos").push(todo);
        todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        });
    }
}
const startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        const todoRef = firebaseRef.child(`todos/${id}`);
        const updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        }
        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates));
        });
    }
}

export { setSearchText, addTodo, toggleShowCompleted, updateTodo, addTodoInBulk, startAddTodo, startToggleTodo };
