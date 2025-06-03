export default function MovieRating({ setRating }) {
    return (<div>
        <label htmlFor="grade">Betyg:</label>
        <select id="grade" defaultValue="" onChange={e => setRating(e.target.value)}>
            <option value="">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>)
}