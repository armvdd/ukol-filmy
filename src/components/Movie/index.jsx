import React from "react";
import "./style.css";
import Actor from "../Actor";

const Movie = ({ title, poster, year, rating, director, genre, cast }) => {
  return (
    <div className="movieCard">
      <div className="movieCard-left">
        <p className="movieCard--rating">{rating} / 10</p>
        <img src={`/assets/${poster}`} className="movieCard--poster" />
      </div>
      <div className="movieCard-right">
        <div className="movieCard-right__up">
          <h2 className="movieCard--title">{title}</h2>
          <p className="movieCard--year">
            <div className="movieCard--tit">Rok vydání:</div>
            {year}
          </p>
          <p className="movieCard--genre">
            <div className="movieCard--tit">Žánr: </div> {genre}
          </p>
          <p className="movieCard--director">
            <div className="movieCard--tit">Režie: </div>
            {director}
          </p>
          <h3 className="movieCard--starring">V hlavních rolích:</h3>
        </div>
        <div className="movieCard-right__down">
          <Actor name="John Travolta" as="Vincent Vega" />
        </div>
      </div>
    </div>
  );
};

export default Movie;
