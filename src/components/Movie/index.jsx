import React from "react";
import "./style.css";
import movies from "../../movies";

const Movie = ({ title, poster, year, rating, director, genre, cast }) => {
  return (
    <div className="movieCard">
      <div className="movieCard-left">
        <p className="movieCard--rating">{rating}</p>  
        <img src={`/assets/${poster}`} className="movieCard--poster" />
      </div>
      <div className="movieCard-right">
        <h2 className="movieCard--title">{title}</h2>
        <p className="movieCard--year"> Rok vydání: {year}</p>
        <p className="movieCard--genre">Žánr: {genre}</p>
        <p className="movieCard--director">Režie: {director}</p>
        <h3 className="movieCard--starring">V hlavních rolích:</h3>
      </div>
    </div>
  );
};

export default Movie;
