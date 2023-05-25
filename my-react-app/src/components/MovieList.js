import React from 'react';

const MovieList = (props) => {
    return (
        <div>
        {props.movies.map(movie => (
            <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.vote_average}</p>
            <img src={movie.poster_path}/>
            </div>
        ))}
        </div>
    );
    }
export default MovieList;
