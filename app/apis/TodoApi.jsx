module.exports = {
    setTodos: (todos) => {
        if (Array.isArray(todos)) {
            localStorage.setItem("todos", JSON.stringify(todos));
            return todos;
        }
        return undefined;
    },
    getTodos: () => {
        const stringTodos = localStorage.getItem("todos");
        let todos = [];
        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
            console.log(e);
        }
        return Array.isArray(todos) ? todos : [];
    },
    /*
    Note :  isChecked is for show completed items in TodoSearch part
            and isCompleted is for each todo item present in the list in TodoList part ...
    */
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