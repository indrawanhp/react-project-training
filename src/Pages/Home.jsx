import React from "react";
import MovieList from "../components/MovieList/MovieList";
import Nav from "../components/Nav/Nav";

import "./style.css";

function Home() {
  return (
    <>
      <Nav />
      <div className="main-content">
        <h1 className="content-title">Now Playing</h1>
        <MovieList url={"https://api.themoviedb.org/3/movie/now_playing?api_key=287bdeab2d59622d1a13c8d3d4ab89bc&language=en-US&page="} paginate={true} />
      </div>
    </>
  );
}

export default Home;
