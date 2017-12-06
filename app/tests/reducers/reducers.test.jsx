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
                text: "Suzal is writing test cases for redux."
            }
            const response = todoReducer(deepFreeze([]), deepFreeze(action));
            expect(response.length).toEqual(1);
            expect(response[0].text).toEqual(action.text);
        });
        it("should update the toggle ", () => {
            const todos = [{
                id: "99",
                text: "Suzal le garrxa jassto xa hai ",
                isCompleted: true,
                createdAt: 123,
                completedAt: 125
            }];
            const action = {
                type: "TOGGLE_TODO",
                id: "99"
            };
            const response = todoReducer(deepFreeze(todos), deepFreeze(action));
            expect(response[0].isCompleted).toEqual(false);
            expect(response[0].completedAt).toEqual(undefined);
        });
    });
});