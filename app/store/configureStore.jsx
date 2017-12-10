import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { searchTextReducer, authReducer, showCompletedReducer, todoReducer } from "Reducers";

const configureStore = (initialState = {}) => {
    const reducer = combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todoReducer,
        auth: authReducer
    });
    const store = createStore(reducer, initialState, compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
}

export { configureStore };