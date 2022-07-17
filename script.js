"use strict";

const numberOffFilms = +prompt('Сколько фильмов Вы уже просмотрели', '');

const personalMovieDB = {
    count: numberOffFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один из последних просмотреных фильмов?', ''),
      b = prompt('Насколько оцениваете его?', ''),
      c = prompt('Один из последних просмотреных фильмов?', ''),
      d = prompt('Насколько оцениваете его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);