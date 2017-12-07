import expect from "expect";

import { setSearchText, addTodo, toggleShowCompleted, toggleTodo, addTodoInBulk } from "Actions";

describe("setSearchText() ...", () => {
    it("should generate search text action", () => {
        const action = {
            type: "SET_SEARCH_TEXT",
            searchText: "Some text"
        };
        const response = setSearchText(action.searchText);
        expect(response).toEqual(action);
    });

    it("should generate add todo text action", () => {
        const action = {
            type: "ADD_TODO",
            text: "Some text again"
        };
        const response = addTodo(action.text);
        expect(response).toEqual(action);
    });

    it("should generate toggleShowCompleted action", () => {
        const action = {
            type: "TOGGLE_SHOW_COMPLETED"
        };
        const response = toggleShowCompleted();
        expect(response).toEqual(action);
    });

    it("should generate toggle add todo action", () => {
        const action = {
            type: "TOGGLE_TODO",
            id: 12
        };
        const response = toggleTodo(action.id);
        expect(response).toEqual(action);
    });
    it("should be adding todos in bulk", () => {
        const todos = [{
            id: "111",
            text: "Anything",
            completed: false,
            completedAt: undefined,
            createdAt: 33000
        }];
        const action = {
            type: "ADD_TODOS_IN_BULK",
            todos
        }
        const response = addTodoInBulk(todos);
        expect(response).toEqual(action);
    });
});