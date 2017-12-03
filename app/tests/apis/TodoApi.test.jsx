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
});