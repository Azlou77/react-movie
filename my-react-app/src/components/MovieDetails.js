import React from 'react';

const MovieDetails = (props) => {
    return (
        <>
        {props.movies.map(movie => (
            <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            <ul>
                {movie.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
            <p>{movie.overview}</p>
            <p>{movie.popularity}</p>

            <div className='d-flex justify-content-center'>
                <img src={movie.poster_path}/>
            </div>

            </div>
        ))}
        </>
    );
    }

export default MovieDetails;