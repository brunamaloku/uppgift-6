'use client';
import { useState } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import AlphabetButton from './components/AlphabetButton';
import RatingButton from './components/RatingButton';

export default function Home() {

  const [movieList, setMovieList] = useState([]);

  return (
    <div id="home-page">
        <h1>Min filmlista</h1>

        <MovieForm setMovieList={setMovieList} />

        <h2>Mina filmer</h2>

        <MovieList movieList={movieList} setMovieList={setMovieList} />

        <div id="buttons">
          <AlphabetButton movieList={movieList} setMovieList={setMovieList} />
          <RatingButton movieList={movieList} setMovieList={setMovieList} />
        </div>
    </div>
  );
}

{/* slay */ }