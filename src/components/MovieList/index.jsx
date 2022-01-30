import React from "react";
import Movie from "../Movie";
import "./style.css";


const MovieList = ({movies}) => {
    return (
        <div className = "movielist">
            {movies.map(movie => <Movie title = {movie.title} year = {movie.year} genre = {movie.genre} director = {movie.director} poster = {movie.poster} rating = {movie.rating} key = {movie.id}/>)}
        </div>
    )
}

export default MovieList;