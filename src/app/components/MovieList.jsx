import GetStars from "./GetStarts";
import DeleteButton from "./DeleteButton";

const MovieList = ({ movieList, setMovieList }) => {
    const listItems = movieList.map(movie =>

        <li data-grade={movie.grade} data-title={movie.title} key={movie.title}>
            {movie.title}
            <DeleteButton setMovieList={setMovieList} movie={movie} />
            <GetStars rating={movie.grade} />
        </li>
    );
    return (
        <ul id="movie-list">{listItems}</ul>
    )
}
export default MovieList;
