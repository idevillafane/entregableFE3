import React, {Component} from 'react';

export class Opciones extends Component{
    render(){
        return(
            <div className='opciones'>
                <div className='opcion'>
                    <button id='A' className='botones' onClick={this.props.handleClick}>A</button>
                    <h2>{this.props.opcion.a}</h2>
                </div>
                <div className='opcion'>
                    <button id='B' className='botones' onClick={this.props.handleClick}>B</button>
                    <h2>{this.props.opcion.b}</h2>
                </div>
            </div>

        )
    }
}