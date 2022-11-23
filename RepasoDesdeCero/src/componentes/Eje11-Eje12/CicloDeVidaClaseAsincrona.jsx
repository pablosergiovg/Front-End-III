import React, { Component, Fragment } from 'react'

export default class CicloDeVidaClaseAsincrona extends Component {

    state = {
        index: 1,
        personaje: null
    }

    getData = async () => {
        fetch(`https://rickandmortyapi.com/api/character/${this.state.index}`)
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            this.setState({
                personaje: data
            })
        })
    }

    incrementarIndex = () => {
        this.setState({
            index: this.state.index + 1
        })
    }

    decrementarIndex = () => {
        if(this.state.index > 1){
            this.setState({
                index: this.state.index - 1
            })
        }
        
    }

    componentDidMount(){
        this.getData();
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.index !== this.state.index){
            this.getData();
        }
        //console.log(this.state.index);
    }

  render() {
    
    return (
    <Fragment>
        <p>---Eje.11---CicloDeVidaAsincrona CompClase---</p>
        <div>
            <img src={this.state.personaje?.image} alt={this.state.personaje?.name} />
            <h2>{this.state.personaje?.name}</h2>
            <button onClick={() => this.incrementarIndex()}>Siguiente</button>
            <button onClick={() => this.decrementarIndex()}>Anterior</button>
        </div>
        <p>---------------------------</p>
    </Fragment>
    )
  }
}
