
import './App.css';
import { useEffect, useState } from 'react'
import Header from './components/Header'
import MovieTitleScroll from './components/MovieTitleScroll'

//API Key
function App() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWE5YjE2ODcxN2RiMjE3NDEzZDQzODdhOTFhZWY2YyIsInN1YiI6IjY0YWRlYTAwNmEzNDQ4MDBjOWZjZTJkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FJeABoW3VzJusjQMyBC_Im__J0eNyOhMeBKCZ-UaDA0'
    }
  };
  fetch('https://api.themoviedb.org/3/authentication', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  


    return (
      <div className="App">
          <Header/>
          <header>
            <h1 className="title">Rant, Rave & Review Your Movies</h1>
  
            <div className="navBar">
            
            </div>
          </header>

  
      </div>
    );
  }
  
  export default App;