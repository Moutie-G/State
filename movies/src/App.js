import {useState} from "react" ;
import {movie} from "./assets/Data" ;
import MovieList from "./Components/MovieList" ;
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [ListMovie, setListMovie] =useState(movie)
  const addFilm =(form) => {
     //form={title,posterUrl,description,rate}
    setListMovie([form,...ListMovie])
  }
  return (
    <div className="container-fluid">
     <MovieList listMovie={listMovie} addFilm={addFilm}/>
    </div>
  );
}
export default App;
