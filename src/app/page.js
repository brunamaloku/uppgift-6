'use client';
import { useState } from 'react';

export default function Home() {

  const [movieList, setMovieList] = useState([]);

  function MovieForm() {

    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');

    function SubmitForm(e) {
      e.preventDefault();


      if (title === "" || rating === "") {
        alert("Vänligen fyll i alla fält <3");
        return false;
      }

      setMovieList([
        ...movieList,
        { title: title, grade: rating }
      ]);
      e.target.reset();
    }

    return (
      <>
        <form action="#" id="new-movie-form" onSubmit={SubmitForm}>
          <fieldset>
            <legend>Lägg till en film</legend>
            <div className="form-group">
              <label htmlFor="title">Titel:</label>
              <input type="text" className="form-control" id="title" placeholder="Titel här..." onChange={e => setTitle(e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor="grade">Betyg:</label>
              <select id="grade" className="form-control" defaultValue="" onChange={e => setRating(e.target.value)}>
                <option value="">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="form-group mt-2">
              <button id="save-movie" className="btn btn-success">
                Spara film
              </button>
            </div>
          </fieldset>
        </form>
      </>
    )

  }

  function GetStars(rating) {
    let stars = [];
    for (let i = 0; i < rating.rating; i++) {
      stars.push(<img src={"images/star.png"} alt="Star" key={i}></img>);
    }
    return(stars)
  }

  function ListMovies() {
    const listItems = movieList.map(movie =>

      <li data-grade={movie.grade} data-title={movie.title}  key={movie.title}>
        {movie.title}
        <img src={'images/delete.png'} alt="Delete movie" className="delete-movie" />
        {/* <GetStars rating={movie.grade} /> */}
        <GetStars rating={movie.grade} />
      </li>
    );
    return (
      <ul id="movie-list">{listItems}</ul>
    )
  }

  function SortAlphabetically() {

    const sortedList = [...movieList];
    sortedList.sort(function(a, b) {
        var x = a.title;
        var y = b.title;
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      }
    );
    setMovieList(sortedList);
  }

  function SortByRating() {

    const sortedList = [...movieList];
    sortedList.sort(function(a, b) {
        var x = b.grade;
        var y = a.grade;
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      }
    );
    console.log(sortedList);
    setMovieList(sortedList);
  }

  return (
    <div className="row container-fluid">
      <div className="xs-col-12">
        <h1>Min filmlista</h1>

        <MovieForm />

        <hr />

        <h2>Mina filmer</h2>

        <ListMovies />


        <button id="order-alphabetic" className="btn btn-primary" onClick={SortAlphabetically}>
          Alfabetisk ordning
        </button>
        <button id="order-grade" className="btn btn-primary" onClick={SortByRating}>
          Betygsordning
        </button>
      </div>
    </div>
  );
}

{/* slay */ }