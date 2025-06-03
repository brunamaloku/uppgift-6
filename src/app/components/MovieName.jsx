export default function MovieName({setTitle}) {
    return (
        <div id="title-form">
            <label htmlFor="title">Titel:</label>
            <input type="text" id="title" placeholder="Titel här..." onChange={e => setTitle(e.target.value)} />
        </div>
    )
}