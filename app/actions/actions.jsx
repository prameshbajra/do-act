const setSearchText = (searchText) => {
    return {
        type: "SET_SEARCH_TEXT",
        searchText
    };
}
const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        text
    };
}
const toggleShowCompleted = () => {
    return {
        type: "TOGGLE_SHOW_COMPLETED"
    }
}
const toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO",
        id
    }
}

export { setSearchText, addTodo, toggleShowCompleted, toggleTodo };
