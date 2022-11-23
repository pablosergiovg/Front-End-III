import React, { Component, Fragment } from 'react'
import { fire, water, rock} from "./dbPokemons.json"
import "./styloPokemon.css"
const arrayPokemon = [...fire, ...water, ...rock];

export default class CicloDeVidaCClase extends Component {

    state = {
        index: 0,
        imagen: "",
        nombre: ""
    }

    incrementCount = () => {
      //console.log("incrementando");
      //console.log(this.state.index);
        this.setState({ index: this.state.index + 1})
    }

    decrementCount = () => {
      //console.log("decrementando");
      //console.log(this.state.index);
      if(this.state.index > 0){
        this.setState({ index: this.state.index - 1})
      }
        
    }

    componentDidMount(){
      this.setState({
        index: 0,
        imagen: arrayPokemon[this.state.index].avatar,
        nombre: arrayPokemon[this.state.index].pokemonName
      })  
    }

    componentDidUpdate(prevProps, prevState){
      //console.log(prevState);
      if(prevState.index !== this.state.index){
        this.setState({
          imagen: arrayPokemon[(this.state.index % arrayPokemon.length)].avatar,
          nombre: arrayPokemon[(this.state.index % arrayPokemon.length)].pokemonName
        })
      }

    }

  render() {

    return (
      <Fragment>
        <p>---Eje.10---CicloDeVida CompClase---</p>
        <div className="containerPokemon">
          <img className='imgPokemon' src={this.state.imagen} alt={this.state.nombre} />
          <h1>{this.state.nombre}</h1>
          <div className='divBotones'>
              <button onClick={() => this.decrementCount()}>Prev</button>
              <button onClick={() => this.incrementCount()}>Next</button>
          </div>
        </div>
        <p>---------------------------</p>
      </Fragment>
    )
  }
}
