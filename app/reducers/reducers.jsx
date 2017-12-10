import uuidV1 from "uuid/v1";
import moment from "moment";

const searchTextReducer = (state = "", action) => {
    switch (action.type) {
        case "SET_SEARCH_TEXT":
            return action.searchText;
        default: return state;
    }
}

const showCompletedReducer = (state = false, action) => {
    switch (action.type) {
        case "TOGGLE_SHOW_COMPLETED":
            return !state;
        default: return state;
    }
}

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                uid: action.uid
            }
        case "LOGOUT": return {};
        default: return state
    }
}

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                action.todo
            ];
        case "ADD_TODOS_IN_BULK":
            return [...state, ...action.todos];
        case "UPDATE_TODO":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        ...action.updates
                    }
                }
                return todo;
            });
        default: return state;
    }
}

export { searchTextReducer, showCompletedReducer, authReducer, todoReducer };