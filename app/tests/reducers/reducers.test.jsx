import expect from "expect";
import deepFreeze from "deep-freeze-strict";

import { searchTextReducer, showCompletedReducer } from "Reducers";

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
    describe("showCompletedTodo", () => {
        it("should showCompleted status", () => {
            const action = {
                type: "TOGGLE_SHOW_COMPLETED"
            }
            const response = showCompletedReducer(deepFreeze(true), deepFreeze(action));
            expect(response).toEqual(false);
        });
    });
});