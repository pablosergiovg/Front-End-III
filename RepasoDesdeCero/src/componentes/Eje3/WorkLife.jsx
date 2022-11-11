import React from 'react'
import { generalInformation } from './dbEje3'


const WorkLife = () => {

    const [ actuaciones ] = generalInformation;
    const { movies, series } = actuaciones;

  return (
    <div>
        <ul>
            {
                actuaciones.movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))
            }
        </ul>
        <ul>
            {
                actuaciones.series.map((serie, index) => (
                    <li key={index}>{serie}</li>
                ))
            }
        </ul>
        <p>---------------------------</p>
    </div>
  )
}

export default WorkLife