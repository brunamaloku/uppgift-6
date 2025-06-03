export default function DeleteButton({ setMovieList, movie }) {

    function DeleteMovie() {
        setMovieList(movies => (
            movies.filter(m =>
                m.title !== movie.title //OBS detta dörutsätter inga dubletter i listan
            )
        ));
    }

    return <img src={'images/delete.png'} alt="Delete movie" className="delete-movie" onClick={DeleteMovie} />;
}