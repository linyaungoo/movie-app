import { useEffect } from "react";
import { useState } from "react";
import './App.css';
import MovieCard  from "./MovieCard";
//34eabfa9

const API_URL = 'http://www.omdbapi.com/?apikey=34eabfa9';



const App = () =>{
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) =>{
    try{
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
    }
    catch(error){
      console.error(error);
    }
    
  }

  useEffect(() =>{
    searchMovies('Superman');
  }, []);
  
  return(
    <div className="app">
      <h1>MOVIELAND</h1>
      <div className="search">
        <input placeholder="Search for movies" value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <img
          src={searchMovies.svg}
          alt="search"
          onClick={()=>searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0 ?(
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
        ):(
          <div className="empty">
            <h2>No Movies found</h2>
          </div>
        )
      }

      
    </div>
  );
}
export default App;
