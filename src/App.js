import { useState } from 'react';
import './App.css';
import {movies} from './assets/Data'
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [listMovie, setListMovie] = useState(movies)
  const addFilm=(form)=>{
    //form={title,posterUrl,description,rate}
    setListMovie([form,...listMovie])
  }
  return (
    <div className='container-fluid' >
      <MovieList listMovie={listMovie} addFilm={addFilm} />
    </div>
  );
}

export default App;
