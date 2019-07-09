function applyForVisa(document, resolve, reject) {
    console.log('Processing..')
    let n = Math.random()
    let visa = { number: '190831i123io' }
    return new Promise((resolve, reject) => {
        setTimeout(() => (document.name === 'Ivan' && n > .2) ? resolve(visa) : reject('Becoz.. hehe'), 2000)
    })
}

function bookHotel(visa) {
    console.log(`Booking hotel for ${visa.number}..`)
    let n = Math.random()
    let reservation = { code: 'ZOPA' }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            n > .2 ? resolve(reservation) : reject('No rooms')
        }, 2000)

    })
}

function buyTickets(reservation) {
    console.log(`Buying tickets for ${reservation.code}..`)
    let n = Math.random()
    let ticket = { sit: '19B' }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            n > .2 ? resolve(ticket) : reject('No sits')
        }, 2000)

    })
}


applyForVisa({ name: 'Ivan' })
    .then(bookHotel)
    .then(buyTickets)
    .then((ticket) => console.log(`Ticket bought at ${ticket.sit}`))
    .catch(error => console.error(error))
