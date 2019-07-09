// let vegetables = ['cucumber', 'potato', 'you']

// console.log(vegetables[Symbol.iterator])

// let it = vegetables[Symbol.iterator]()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

let idGenerator = {
    [Symbol.iterator]() {
        let id = 1;
        let done = false;
        return {
            next() {
                let inLimit = id < 100;
                let value = inLimit ? id++ : undefined;
                let done = inLimit ? false : true;
                return { value, done }
            }
        }
    }
}

let randomGenerator = {
    generate() {
        return this[Symbol.iterator]()
    },

    [Symbol.iterator]() {
        let count = 0
        return {
            next() {
                let value = Math.ceil(Math.random() * 100)
                let done = count > 9
                count++
                return { value, done }
            }
        }
    }
}

let random = randomGenerator.generate()
console.log(random.next())

// for (let id of idGenerator) {
//     console.log(id)
// }
