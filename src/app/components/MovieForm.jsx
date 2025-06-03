import { useState } from 'react';
import SaveButton from './SaveButton';
import MovieName from './MovieName';
import MovieRating from './MovieRating';

const MovieForm = ({ setMovieList }) => {

    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');

    function SubmitForm(e) {
        e.preventDefault();

        if (title === "" || rating === "") {
            alert("Vänligen fyll i alla fält <3");
            return false;
        }

        setMovieList(movieList => ([
            ...movieList,
            { title: title, grade: rating }
        ]));
        e.target.reset();
        setRating("");
        setTitle("");
    }

    return (
        <>
            <form action="#" id="new-movie-form" onSubmit={SubmitForm}>
                <fieldset>
                    <legend>Lägg till en film</legend>
                    <MovieName setTitle={setTitle} />
                    <MovieRating setRating={setRating} />
                    <SaveButton />
                </fieldset>
            </form>
        </>
    )

}

export default MovieForm;