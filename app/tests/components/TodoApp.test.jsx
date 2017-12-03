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
    it("should toggle properly ...", () => {
        const todoItem = {
            id: 123,
            text: "Suzal is learning react testing",
            isCompleted: false
        };
        const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({
            todos: [todoItem]
        });
        expect(todoApp.state.todos[0].isCompleted).toBe(false);
        todoApp.handleToggle(todoItem.id);
        expect(todoApp.state.todos[0].isCompleted).toBe(true);
    });
});