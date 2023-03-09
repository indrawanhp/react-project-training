import React from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import Nav from "../components/Nav/Nav";

function Details() {
  let { id } = useParams();

  return (
    <>
      <Nav />
      <MovieDetail id={id} />
    </>
  );
}

export default Details;
