import { compose, combineReducers, createStore } from "redux";

import { searchTextReducer, showCompletedReducer, todoReducer } from "Reducers";

const configureStore = () => {
    const reducer = combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todoReducer
    });
    const store = createStore(reducer, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
}

export { configureStore };