let user = {
    name: 'Ivan',
    [Symbol.for('password')]: '123'
}

console.log(user)
console.log(Object.keys(user))
console.log(user[Symbol.for('password')])
