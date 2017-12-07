import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jQuery";
import TestUtils from "react-dom/test-utils";
import { Provider } from "react-redux";

import configureStore from "ConfigureStore";
import TodoApp from "TodoApp";

describe("TodoApp", () => {
    it("should exist ...", () => {
        expect(TodoApp).toBeTruthy();
    });
});