import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="row container-fluid">
      <div className="xs-col-12">
        <h1>Min filmlista</h1>

        <form action="#" id="new-movie-form">
          <fieldset>
            <legend>Lägg till en film</legend>
            <div className="form-group">
              <label htmlFor="title">Titel:</label>
              <input type="text" className="form-control" id="title" placeholder="Titel här..." />
            </div>

            <div className="form-group">
              <label htmlFor="grade">Betyg:</label>
              <select id="grade" className="form-control">
                <option value="" selected>Välj betyg här...</option>
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

            <hr/>

             <h2>Mina filmer</h2>
            <ul id="movie-list">
            </ul>

            <button id="order-alphabetic" className="btn btn-primary">
                Alfabetisk ordning
            </button>
            <button id="order-grade" className="btn btn-primary">
                Betygsordning
            </button>
      </div>
    </div>
  );
}

{/* slay */}