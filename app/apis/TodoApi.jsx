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
    filteredTodos: (todos, isChecked, searchText) => {
        let filteredTodos = todos;
        filteredTodos = filteredTodos.filter((todoItem) => {
            return !todoItem.isCompleted || isChecked;
        });
        return filteredTodos;
    }
};