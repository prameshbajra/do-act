import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jQuery";
import TestUtils from "react-dom/test-utils";

import AddTodo from "AddTodo";

describe("AddTodo", () => {
    it("should exist ...", () => {
        expect(AddTodo).toBeTruthy();
    });

    it("should call onAddTodo with valid data ...", () => {
        const spy = expect.createSpy();
        const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
        const $el = $(ReactDOM.findDOMNode(addTodo));

        console.log($el);
    });
});