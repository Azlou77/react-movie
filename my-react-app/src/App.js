import React, { useEffect, useState } from 'react';

// Import Bootstrap components
import 'bootstrap/dist/css/bootstrap.css';

// Import components
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([

    // Data movies in JSON format
    {
      "id": 3,
      "title": "Fight Club",
      "director": "David Fincher",
      "vote_average": 66,
      "poster_path": "https://image.tmdb.org/t/p/w500/811DjJTon9gD6hZ8nCjSitaIXFQ.jpg"

    },
  ]);

  // Get movie data from API
  const getMovieRequest = async () => {

    // Url to get movie data
    const url = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const responseJson = await response.json();

    // Display movie data in console
    console.log(responseJson);

    // Set movie data to movies
    setMovies(responseJson.Search);
  };

useEffect(() => {
  getMovieRequest();
}, []);

// Styles how the movie data is displayed
  return ( 
  <div className='container-fluid movie-app'>
    <div className='row'>
    <MovieList movies={movies} />
    </div>
  </div>
  );
}

export default App;