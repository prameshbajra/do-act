module.exports = {
    filteredTodos: (todos, showCompleted, searchText) => {
        let filteredTodos = todos;
        searchText = searchText.replace(/on/g, "");
        filteredTodos = filteredTodos.filter((todoItem) => {
            const text = todoItem.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });
        filteredTodos = filteredTodos.filter((todoItem) => {
            return !todoItem.completed || showCompleted;
        });
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) { return -1; }
            else if (a.completed && !b.completed) { return 1; }
            else { return 0; }
        });
        return filteredTodos;
    }
};