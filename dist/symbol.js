'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var user = _defineProperty({
    name: 'Ivan'
}, Symbol.for('password'), '123');

console.log(user);
console.log(Object.keys(user));
console.log(user[Symbol.for('password')]);