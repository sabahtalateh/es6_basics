"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// let vegetables = ['cucumber', 'potato', 'you']

// console.log(vegetables[Symbol.iterator])

// let it = vegetables[Symbol.iterator]()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

var idGenerator = _defineProperty({}, Symbol.iterator, function () {
    var id = 1;
    var done = false;
    return {
        next: function next() {
            var inLimit = id < 100;
            var value = inLimit ? id++ : undefined;
            var done = inLimit ? false : true;
            return { value: value, done: done };
        }
    };
});

var randomGenerator = _defineProperty({
    generate: function generate() {
        return this[Symbol.iterator]();
    }
}, Symbol.iterator, function () {
    var count = 0;
    return {
        next: function next() {
            var value = Math.ceil(Math.random() * 100);
            var done = count > 9;
            count++;
            return { value: value, done: done };
        }
    };
});

var random = randomGenerator.generate();
console.log(random.next());

// for (let id of idGenerator) {
//     console.log(id)
// }