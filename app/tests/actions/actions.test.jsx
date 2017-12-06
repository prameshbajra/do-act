import expect from "expect";

import { setSearchText, addTodo, toggleShowCompleted, toggleTodo } from "Actions";

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
});