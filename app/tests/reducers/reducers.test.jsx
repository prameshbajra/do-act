import expect from "expect";
import deepFreeze from "deep-freeze-strict";

import { searchTextReducer, showCompletedReducer, todoReducer } from "Reducers";

describe("Reducers ...", () => {
    describe("searchTextReducer()", () => {
        it("should set search text", () => {
            const action = {
                type: "SET_SEARCH_TEXT",
                searchText: "Yey o superman"
            };
            const response = searchTextReducer(deepFreeze(""), deepFreeze(action));
            expect(response).toEqual(action.searchText);
        });
    });
    describe("showCompletedTodo()", () => {
        it("should showCompleted status", () => {
            const action = {
                type: "TOGGLE_SHOW_COMPLETED"
            }
            const response = showCompletedReducer(deepFreeze(true), deepFreeze(action));
            expect(response).toEqual(false);
        });
    });
    describe("todoReducer()", () => {
        it("should add todos", () => {
            const action = {
                type: "ADD_TODO",
                todo: {
                    id: "123",
                    text: "Something",
                    completed: false,
                    createdAt: 13435
                }
            }
            const response = todoReducer(deepFreeze([]), deepFreeze(action));
            expect(response.length).toEqual(1);
            expect(response[0]).toEqual(action.todo);
        });
        it("should update the toggle ", () => {
            const todos = [{
                id: "99",
                text: "Suzal le garrxa jassto xa hai ",
                completed: true,
                createdAt: 123,
                completedAt: 125
            }];
            const action = {
                type: "TOGGLE_TODO",
                id: "99"
            };
            const response = todoReducer(deepFreeze(todos), deepFreeze(action));
            expect(response[0].completed).toEqual(false);
            expect(response[0].completedAt).toEqual(undefined);
        });
        it("should add existing todos", () => {
            const todos = [{
                id: "99",
                text: "Suzal le garrxa jassto xa hai ",
                completed: false,
                createdAt: 123,
                completedAt: 125
            }];
            const action = {
                type: "ADD_TODOS_IN_BULK",
                todos
            };
            const response = todoReducer(deepFreeze([]), deepFreeze(action));
            expect(response.length).toEqual(1);
            expect(response[0]).toEqual(todos[0]);
        });
    });
});