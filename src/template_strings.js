let a = 2
let b = 3

let c = `a + b = ${a + b}`

let name = 'Ivan'
console.log(upperName`Hello ${name}`)

function upperName(literals, ...values) {
    console.log(literals, values)
}
