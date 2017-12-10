import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { searchTextReducer, authReducer, showCompletedReducer, todoReducer } from "Reducers";

const configureStore = () => {
    const reducer = combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        auth: authReducer,
        todos: todoReducer
    });
    const store = createStore(reducer, compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
}

export { configureStore };