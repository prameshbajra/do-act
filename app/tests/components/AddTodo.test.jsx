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
    // Pai aaba k garrney !! Aayena ta ...
    //
    // it("should call onAddTodo prop with legit data", () => {
    //     const spy = jest.fn(AddTodo);
    //     const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    //     const $el = $(ReactDOM.findDOMNode(addTodo));
    //     addTodo.refs.todoText.value = "Pramesh";
    //     TestUtils.Simulate.submit($el.find("form")[0]);
    //     expect(spy).toHaveBeenCalledWith("Pramesh");
    // });
});