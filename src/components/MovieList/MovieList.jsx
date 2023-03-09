import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import axios from 'axios';

import './style.css';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function MovieList({ url, paginate }) {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const URL = url + pageNumber;

  const displayMovies = movies.map((movie) => {
    return (
      <Link
        to={`/details/${movie.id}`}
        style={{ color: 'inherit', textDecoration: 'none' }}
        key={movie.id}
      >
        <MovieCard movie={movie} />
      </Link>
    );
  });

  const changePage = ({ selected }) => {
    setPageNumber(selected + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    axios
      .get(
        URL
        // `https://api.themoviedb.org/3/movie/now_playing?api_key=287bdeab2d59622d1a13c8d3d4ab89bc&language=en-US&page=${pageNumber}`
      )
      .then((res) => {
        setMovies(res.data.results);
        setPageCount(res.data.total_pages);
        setIsLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [pageNumber, URL]);

  return (
    <>
      {isLoaded ? (
        <>
          <div className="movie-list">{displayMovies}</div>
          {paginate ? (
            <ReactPaginate
              previousLabel="Prev"
              nextLabel="Next"
              pageCount={pageCount}
              pageRange={2}
              marginPagesDisplayed={2}
              onPageChange={changePage}
              containerClassName={'container'}
              previousLinkClassName={pageNumber === 1 ? 'disabled' : 'page'}
              breakClassName={'page'}
              nextLinkClassName={pageNumber === pageCount ? 'disabled' : 'page'}
              pageClassName={'page'}
              disabledClassNae={'disabled'}
              activeClassName={'active'}
            />
          ) : (
            ''
          )}
        </>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}

export default MovieList;
