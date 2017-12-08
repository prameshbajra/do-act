import expect from "expect";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

import {
    setSearchText,
    addTodo,
    toggleShowCompleted,
    toggleTodo,
    addTodoInBulk,
    startAddTodo
} from "Actions";

const createMockStore = configureMockStore([thunk]);

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
            todo: {
                id: "123",
                text: "Something here",
                completed: false,
                createdAt: 3123
            }
        };
        const response = addTodo(action.todo);
        expect(response).toEqual(action);
    });

    // it("should create todo and dispatch add todo", (done) => {
    //     const store = createMockStore({});
    //     const todoText = "Somtajsdhfjajfhalkshwghdlao";
    //     store.dispatch(startAddTodo(todoText)).then(() => {
    //         const actions = store.getActions();
    //         expect(actions[0]).toInclude({
    //             type: "ADD_TODO"
    //         });
    //         expect(actions[0].todo).toInclude({
    //             text: todoText
    //         });
    //         done();
    //     }).catch(done);
    // });

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