import React from 'react';

import './style.css';

import emptyImage from '../../images/empty-placeholder.png';

function MovieCard({ movie }) {
  let releaseDate = new Date(movie.release_date);
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
              : emptyImage
          }
          alt="Movie Poster"
        />
      </div>
      <div className="card-details">
        <h3>{movie.title}</h3>
        <h5>
          Release Date : &nbsp;
          {releaseDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </h5>
        <h5>Rating : {movie.vote_average}/10</h5>
        <p>{movie.overview ? movie.overview : 'No Description'}</p>
      </div>
    </div>
  );
}

export default MovieCard;
