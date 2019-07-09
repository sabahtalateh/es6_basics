'use strict';

function applyForVisa(document, resolve, reject) {
    console.log('Processing..');
    var n = Math.random();
    var visa = { number: '190831i123io' };
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return document.name === 'Ivan' && n > .2 ? resolve(visa) : reject('Becoz.. hehe');
        }, 2000);
    });
}

function bookHotel(visa) {
    console.log('Booking hotel for ' + visa.number + '..');
    var n = Math.random();
    var reservation = { code: 'ZOPA' };
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            n > .2 ? resolve(reservation) : reject('No rooms');
        }, 2000);
    });
}

function buyTickets(reservation) {
    console.log('Buying tickets for ' + reservation.code + '..');
    var n = Math.random();
    var ticket = { sit: '19B' };
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            n > .2 ? resolve(ticket) : reject('No sits');
        }, 2000);
    });
}

applyForVisa({ name: 'Ivan' }).then(bookHotel).then(buyTickets).then(function (ticket) {
    return console.log('Ticket bought at ' + ticket.sit);
}).catch(function (error) {
    return console.error(error);
});