import firebase, { firebaseRef, githubProvider } from "Firebase";
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
const login = (uid) => {
    return {
        type: "LOGIN",
        uid
    }
}
const logout = () => {
    return {
        type: "LOGOUT"
    }
}
let uidG = ""; // Beacouse getState was not working for startAddTodo () ...
const startAddTodos = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        uidG = uid;
        const todosRef = firebaseRef.child(`users/${uid}/todos`);
        return todosRef.once("value").then((snapshot) => {
            const todos = snapshot.val() || {};
            let parseTodo = [];
            Object.keys(todos).forEach((todoId) => {
                parseTodo.push({
                    id: todoId,
                    ...todos[todoId]
                });
            });
            dispatch(addTodoInBulk(parseTodo));
        });
    }
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
        const uid = getState().auth.uid || uidG;
        const todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };
        const todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);
        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        });
    };
}
const startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
        const updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        }
        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates));
        });
    }
}
const startLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(githubProvider).then((result) => {
            console.log(result);
        }, (e) => {
            console.log("Error", e);
        });
    }
}
const startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            console.log("Logged out");
        });
    }
}

export {
    setSearchText,
    addTodo,
    toggleShowCompleted,
    updateTodo,
    addTodoInBulk,
    startAddTodo,
    startToggleTodo,
    startAddTodos,
    startLogin,
    startLogout,
    login,
    logout
};
