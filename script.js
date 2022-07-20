"use strict";

let numberOffFilms;

function start() {
    numberOffFilms = +prompt('Сколько фильмов Вы уже просмотрели', '');

    while (numberOffFilms == '' || numberOffFilms == null || isNaN(numberOffFilms)) {
        numberOffFilms = +prompt('Сколько фильмов Вы уже просмотрели', '');
    }
}

start();

const personalMovieDB = {
    count: numberOffFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотреных фильмов?', ''),
              b = prompt('Насколько оцениваете его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30 ) {
    console.log("Вы киноман");
} else {
    console.log("Error");
}
console.log(personalMovieDB);
