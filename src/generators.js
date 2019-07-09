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

function* genArray() {
    yield* [1, 2, 3]
}

function* generator2() {
    let n = 1 + (yield)
    console.log(`n=${n}`)

    yield 42
    yield* genArray()
    yield 43
}

let gen2 = generator2()
gen2.next(2)
console.log(gen2.next(2))
console.log(gen2.next())
console.log(gen2.next().value)
console.log(gen2.next())
console.log(gen2.next())
console.log(gen2.next())
console.log("====")

let gen3 = function* () { 
    try {
        yield 111;
        yield 222;
        yield 333;
    } catch (e) {
        console.log(e)
    }
    
}
let ggg = gen3()
console.log(ggg.next())
console.log(ggg.throw(new Error('error')))
console.log(ggg.next())
