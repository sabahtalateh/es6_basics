let a = [1, 2]
let b = [3, 4, 5]

let c = [...a, 2.5, ...b]

let sum = function (a, b, c) {
    return a + b + c
}

sum(...b) 
