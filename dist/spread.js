"use strict";

var a = [1, 2];
var b = [3, 4, 5];

var c = [].concat(a, [2.5], b);

var sum = function sum(a, b, c) {
    return a + b + c;
};

sum.apply(undefined, b);