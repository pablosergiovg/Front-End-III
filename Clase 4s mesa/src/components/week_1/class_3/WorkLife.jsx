import React from 'react'
import { generalInformation } from './db'

const WorkLife = () => {
    const [peliculas] = generalInformation;
    const {movies, series} = peliculas;
    console.log(movies, series);
  return (
    <div>
        <h2>Movies</h2>
        <ul>
            {movies.map((movie, index) => (
                <li key={index}>{movie}</li>
            ))}
        </ul>
        <h2>Series</h2>
        <ul>
            {series.map((serie, index) => (
                <li key={index}>{serie}</li>
            ))}
        </ul>
    </div>
  )
}

export default WorkLife