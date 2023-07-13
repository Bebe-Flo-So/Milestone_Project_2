
import './App.css';
import { useEffect, useState } from 'react'



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
<<<<<<< Updated upstream
    
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>

          <div className="navBar">
            
          </div>
        </header>

        <div className="display">
          
        </div>

  

=======
      Hello World
>>>>>>> Stashed changes
    </div>
  );
}

export default App;

//7aa9b168717db217413d4387a91aef6c (key for tmdb)


