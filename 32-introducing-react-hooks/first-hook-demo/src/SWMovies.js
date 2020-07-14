import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SWMovies() {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState('');
  useEffect(
    () => {
      async function fetchData() {
        const response = await axios.get(`https://swapi.dev/api/films/${number}/`);
        console.log(response.data);
        setMovie(response.data);
      }
      fetchData();
    },
    [number]
  );

  return (
    <div>
      <h1>Pick A Movie</h1>
      <h4>You have selected: {movie.title}</h4>
      <p>{movie.opening_crawl}</p>
      <select value={number} onChange={(event) => setNumber(event.target.value)}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
      </select>
    </div>
  );
}

export default SWMovies;
