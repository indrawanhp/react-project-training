import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './style.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import emptyImage from '../../images/empty-placeholder.png';
import MovieList from '../MovieList/MovieList';

function MovieDetail(props) {
  const [movie, setMovie] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.id}?api_key=287bdeab2d59622d1a13c8d3d4ab89bc&language=en-US`
      )
      .then((res) => {
        setMovie(res.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [props.id]);

  let imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <>
      {isLoaded ? (
        <>
          <div className="movie-detail">
            <div className="movie-detail-img">
              <img
                src={movie.poster_path ? imgUrl : emptyImage}
                alt="movie poster"
              />
            </div>
            <div className="movie-detail-desc">
              <h1>{movie.title}</h1>
              <h3>Original title: {movie.original_title}</h3>
              <div className="movie-desc">
                <p>Genre</p>
                <ul>
                  {movie.genres &&
                    movie.genres.map((genre) => {
                      return <li key={genre.id}>{genre.name}</li>;
                    })}
                </ul>
                <p>Length</p>
                <p>{movie.runtime} minutes</p>
                <p>Rating</p>
                <p>
                  {movie.vote_average}/10 ({movie.vote_count} votes)
                </p>
                <p>Release Date</p>
                <p>
                  {new Date(movie.release_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <p>Homepage</p>
                <a href={movie.homepage} target="_blank" rel="noreferrer">
                  <p>{movie.homepage}</p>
                </a>
              </div>
              <h5>Overview</h5>
              <p>{movie.overview}</p>
              {movie.tagline ? (
                <span className="movie-tagline">"{movie.tagline}"</span>
              ) : (
                ''
              )}
            </div>
          </div>
          <h1>Similar Movies</h1>
          <MovieList
            url={`https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=287bdeab2d59622d1a13c8d3d4ab89bc&&language=en-US&page=1`}
            paginate={false}
          />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}

export default MovieDetail;
