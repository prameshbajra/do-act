import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jQuery";
import TestUtils from "react-dom/test-utils";

import TodoApp from "TodoApp";

describe("TodoApp", () => {
    it("should exist ...", () => {
        expect(TodoApp).toBeTruthy();
    });
    it("should add todo ...", () => {
        const text = "Suzal is trying react";
        const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({ todos: [] });
        todoApp.handleAddTodo(text);

        expect(todoApp.state.todos[0].text).toBe(text);
    });
});