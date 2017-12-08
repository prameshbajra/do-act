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
const toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO",
        id
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

export { setSearchText, addTodo, toggleShowCompleted, toggleTodo, addTodoInBulk, startAddTodo };
