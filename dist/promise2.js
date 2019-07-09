'use strict';

var movieList = document.getElementById('movies');

function addMovieToList(movie) {
    var img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}

function getData(url, done) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        if (200 === xhr.status) {
            var json = JSON.parse(xhr.response);
            console.log(json);
            done(json.Search);
        } else {
            console.error(xhr.statusText);
        }
    };

    xhr.onerror = function (error) {
        console.error(error);
    };

    xhr.send();
}

var search = 'spider man';

getData('http://www.omdbapi.com/?s=' + search + '&apikey=7efa2f6d', function (movies) {
    movies.forEach(function (movie) {
        addMovieToList(movie);
    });
});