import React, {Component}  from 'react';

export class Historia extends Component{
    render(){
        return(
            <div className='recordatorio'>
                <div><span>Selección anterior: {this.props.anterior}</span>
                <span>   -   Historial: </span>
                {this.props.historial.map((item,i) => (<span key={i}>{item}</span>))}</div>
            </div>
        )
    }
}