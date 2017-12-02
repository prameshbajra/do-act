import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jQuery";
import TestUtils from "react-dom/test-utils";

import TodoList from "../../components/TodoList";
import TodoListItem from "../../components/TodoListItem";

describe("TodoList", () => {
    it("should exist ...", () => {
        expect(TodoList).toBeTruthy();
    });
});