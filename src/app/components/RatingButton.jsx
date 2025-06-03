
const RatingButton = ({ movieList, setMovieList }) => {

    function SortByRating() {
        const sortedList = [...movieList];
        sortedList.sort(function (a, b) {
            var x = b.grade;
            var y = a.grade;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
        setMovieList(sortedList);
    }

    return (
        <button id="order-grade" onClick={() => {SortByRating()}}>
            Betygsordning
        </button>
    );
}

export default RatingButton;