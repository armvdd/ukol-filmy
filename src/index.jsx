import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from "./components/Header";
import {movies} from "./movies.js";
import MovieList from "./components/MovieList";



const App = () => (
  <div className = "container">
    <Header />
    <MovieList movies = {movies} />
  </div>
);

render(<App />, document.querySelector('#app'));
