export default function AlphabetButton({ movieList, setMovieList }) {
    function SortAlphabetically() {
        const sortedList = [...movieList];
        sortedList.sort(function (a, b) {
            var x = a.title;
            var y = b.title;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
        setMovieList(sortedList);
    }
    return (
        <button id="order-alphabetic" onClick={() => {SortAlphabetically()}}>
            Alfabetisk ordning
        </button>
    );
}