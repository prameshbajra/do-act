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
    }
};