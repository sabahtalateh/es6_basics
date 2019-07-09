"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(genArray),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(generator2);

// function* generate() {
//     console.log('start')
//     yield 1
//     yield 2
//     yield 3
//     console.log('finish')
// }

// console.log(typeof generate)
// console.log(generate())

// let it = generate();
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// function* range(start, end) {
//     let cur = start;
//     while (cur < end) {
//         yield cur++
//     }
// }

// let r = range(100, 110)

// for (let num of r) {
//     console.log(num)
// }
// console.log(r.next())
// console.log(r.next())

function genArray() {
    return regeneratorRuntime.wrap(function genArray$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    return _context.delegateYield([1, 2, 3], "t0", 1);

                case 1:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this);
}

function generator2() {
    var n;
    return regeneratorRuntime.wrap(function generator2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return;

                case 2:
                    _context2.t0 = _context2.sent;
                    n = 1 + _context2.t0;

                    console.log("n=" + n);

                    _context2.next = 7;
                    return 42;

                case 7:
                    return _context2.delegateYield(genArray(), "t1", 8);

                case 8:
                    _context2.next = 10;
                    return 43;

                case 10:
                case "end":
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

var gen2 = generator2();
gen2.next(2);
console.log(gen2.next(2));
console.log(gen2.next());
console.log(gen2.next().value);
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log("====");

var gen3 = /*#__PURE__*/regeneratorRuntime.mark(function gen3() {
    return regeneratorRuntime.wrap(function gen3$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return 111;

                case 3:
                    _context3.next = 5;
                    return 222;

                case 5:
                    _context3.next = 7;
                    return 333;

                case 7:
                    _context3.next = 12;
                    break;

                case 9:
                    _context3.prev = 9;
                    _context3.t0 = _context3["catch"](0);

                    console.log(_context3.t0);

                case 12:
                case "end":
                    return _context3.stop();
            }
        }
    }, gen3, this, [[0, 9]]);
});
var ggg = gen3();
console.log(ggg.next());
console.log(ggg.throw(new Error('error')));
console.log(ggg.next());