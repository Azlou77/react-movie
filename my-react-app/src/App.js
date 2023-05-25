import React, { useState } from 'react';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([

    {
      "id": 3,
      "title": "Fight Club",
      "director": "David Fincher",
      "vote_average": 66,
      "poster_path": "https://image.tmdb.org/t/p/w500/811DjJTon9gD6hZ8nCjSitaIXFQ.jpg"

    },
  ]);
  return ( 
  <div>
    <MovieList movies={movies} />
  </div>
  );
}

export default App;