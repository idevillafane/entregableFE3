import data from './data';
import React, {Component} from 'react';
import { Historia } from './Historia';
import { Opciones } from './Opciones';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      historial: [],
      count: 0,
      eleccionPrevia: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    alert('Hola Juan Carlos, ¿cómo estás?\n¿Empezamos?')
  }

  handleClick(e){
    const seleccion = e.target.id;
    if (this.state.count > 6){
      this.setState({
        count: 0,
        eleccionPrevia: ''
      })
      alert('¡Eso es todo amigo!')
      window.location.reload(false)
    } else if (seleccion === 'A'){
      this.setState({
        count: this.state.count+1,
        eleccionPrevia: 'A'
      });
    } else if (seleccion === 'B'){
      this.setState({
        count: this.state.count + 1,
        eleccionPrevia: 'B'
      });
    }
  }

  componentDidUpdate(x){
    if(x.count !== this.state.count){
      this.state.historial.push(this.state.eleccionPrevia);
    }
  }

  render() {
    return (
      <div className="layout">
        <h1 className='historia'>{data[this.state.count].historia}</h1>
        <Opciones opcion={data[this.state.count].opciones} handleClick={this.handleClick} />
        <Historia anterior={this.state.eleccionPrevia} historial={this.state.historial} />
      </div>
    );
  }

}