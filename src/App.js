import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";

const api = "https://api.tvmaze.com/shows";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies data={movies} />} />
        <Route path="/movie/:id" element={<MovieDetails data={movies} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
