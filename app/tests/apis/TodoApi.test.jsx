import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jQuery";
import TestUtils from "react-dom/test-utils";

import TodoApi from "TodoApi";

describe("TodoApi", () => {
    it("should exist ... ", () => {
        expect(TodoApi).toBeTruthy();
    });
    // Other test case will not work because actual browser is not used in testing ...
    // It will throw a error ... localStorage not defined error pops up...
    describe("TodoApi - filteredTodos", () => {
        const dummyTodos = [{
            id: 12,
            text: "Suzal was here .",
            isCompeted: true
        }, {
            id: 132,
            text: "Suzal was here too.",
            isCompeted: true
        }, {
            id: 990,
            text: "Pramesh is super cool.",
            isCompeted: false
        }];
        it("should test for filteredTodos for true...", () => {
            const filteredTodosCase1 = TodoApi.filteredTodos(dummyTodos, true, "");
            expect(filteredTodosCase1.length).toBe(3);
        });
        it("should sort by isCompeted status", () => {
            const filteredTodos = TodoApi.filteredTodos(dummyTodos, true, "");
            expect(filteredTodos[0].isCompeted).toBe(true);
        });
        it("should return all todo is searchText is something", () => {
            const filteredTodos = TodoApi.filteredTodos(dummyTodos, true, "suzal");
            expect(filteredTodos.length).toBe(2);
        });
        it("should return all todo is searchText is empty", () => {
            const filteredTodos = TodoApi.filteredTodos(dummyTodos, true, "");
            expect(filteredTodos.length).toBe(3);
        })
    });
});